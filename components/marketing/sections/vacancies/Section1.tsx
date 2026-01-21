"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import styles from "@/styles/marketing/vacancies/vacanciesSection.module.css";
import VacancyItem from "@/components/marketing/elements/VacancyItem";
import {
  vacanciesData,
  regionTree,
  type VacancyArea,
  type RegionNode,
} from "@/utils/marketing/vacanciesData";

type OpenState = Record<string, boolean>;
type SelectedAreasState = Record<VacancyArea, boolean>;

/** ✅ Type guard: leaf node (e.g. Oslo) */
function isLeafNode(
  node: RegionNode,
): node is Extract<RegionNode, { selfAreaKey: VacancyArea }> {
  return "selfAreaKey" in node;
}

/** ✅ Type guard: group node (e.g. Vestlandet/Akershus/Rogaland) */
function isGroupNode(
  node: RegionNode,
): node is Extract<
  RegionNode,
  { children: { key: VacancyArea; label: string }[] }
> {
  return "children" in node && Array.isArray((node as any).children);
}

function getAllAreasFromTree(tree: RegionNode[]): VacancyArea[] {
  const all: VacancyArea[] = [];

  for (const node of tree) {
    if (isGroupNode(node)) {
      all.push(...node.children.map((c) => c.key));
    } else if (isLeafNode(node)) {
      all.push(node.selfAreaKey);
    }
  }

  return all;
}

export default function Section1() {
  const allAreas = useMemo(() => getAllAreasFromTree(regionTree), []);

  // ✅ default: all selected
  const [selectedAreas, setSelectedAreas] = useState<SelectedAreasState>(() => {
    const init = {} as SelectedAreasState;
    for (const a of allAreas) init[a] = true;
    return init;
  });

  // ✅ default: expand groups
  const [openGroups, setOpenGroups] = useState<OpenState>(() => ({
    vestlandet: true,
    akershus: true,
    rogaland: true,
    oslo: true,
  }));

  const toggleGroupOpen = (key: string) => {
    setOpenGroups((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleArea = (area: VacancyArea) => {
    setSelectedAreas((prev) => ({ ...prev, [area]: !prev[area] }));
  };

  const setAreas = (areas: VacancyArea[], value: boolean) => {
    setSelectedAreas((prev) => {
      const next = { ...prev };
      for (const a of areas) next[a] = value;
      return next;
    });
  };

  const countByArea = (area: VacancyArea) => {
    return vacanciesData.filter((v) => v.areas.includes(area)).length;
  };

  const countByAreas = (areas: VacancyArea[]) => {
    return vacanciesData.filter((v) => v.areas.some((a) => areas.includes(a)))
      .length;
  };

  const filteredVacancies = useMemo(() => {
    const activeAreas = Object.entries(selectedAreas)
      .filter(([, on]) => on)
      .map(([k]) => k as VacancyArea);

    if (activeAreas.length === 0) return [];

    return vacanciesData.filter((v) =>
      v.areas.some((a) => activeAreas.includes(a)),
    );
  }, [selectedAreas]);

  return (
    <section className={`section-padding ${styles.topPadding}`}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left column */}
          <aside className={styles.sidebar}>
            <div className={`${styles.leftHeader} heading1-w-modified`}>
              <h2 className="text-anime-style-3">Stillinger</h2>
            </div>

            <div className={styles.filterCard}>
              <h4 className={styles.filterTitle}>Område</h4>

              <div className={styles.filterTree}>
                {regionTree.map((node) => (
                  <RegionGroup
                    key={node.key}
                    node={node}
                    open={!!openGroups[node.key]}
                    onToggleOpen={() => toggleGroupOpen(node.key)}
                    selectedAreas={selectedAreas}
                    onToggleArea={toggleArea}
                    onSetAreas={setAreas}
                    countByArea={countByArea}
                    countByAreas={countByAreas}
                  />
                ))}
              </div>
            </div>
          </aside>

          {/* Right column */}
          <main className={styles.results}>
            <div className={styles.resultsHeader}>
              <p className={styles.resultsSubtitle}>
                {filteredVacancies.length} stillinger tilgjengelig
              </p>
            </div>

            <div className={styles.jobList}>
              {filteredVacancies.length === 0 ? (
                <div className={styles.emptyState}>
                  Ingen stillinger matcher filteret.
                </div>
              ) : (
                filteredVacancies.map((vacancy) => (
                  <VacancyItem key={vacancy.id} vacancy={vacancy} />
                ))
              )}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}

type RegionGroupProps = {
  node: RegionNode;
  open: boolean;
  onToggleOpen: () => void;
  selectedAreas: SelectedAreasState;
  onToggleArea: (area: VacancyArea) => void;
  onSetAreas: (areas: VacancyArea[], value: boolean) => void;
  countByArea: (area: VacancyArea) => number;
  countByAreas: (areas: VacancyArea[]) => number;
};

function RegionGroup({
  node,
  open,
  onToggleOpen,
  selectedAreas,
  onToggleArea,
  onSetAreas,
  countByArea,
  countByAreas,
}: RegionGroupProps) {
  // ✅ leaf (Oslo)
  // ✅ leaf (Oslo)
  if (isLeafNode(node)) {
    const a = node.selfAreaKey;

    return (
      <div className={styles.group}>
        <div className={styles.groupHeader}>
          {/* spacer to align with groups that have the arrow */}
          <span className={styles.chevSpacer} aria-hidden="true" />
          <label className={styles.parentRow}>
            <input
              type="checkbox"
              checked={selectedAreas[a]}
              onChange={() => onToggleArea(a)}
            />
            <span className={styles.parentText}>
              {node.label}{" "}
              <span className={styles.count}>({countByArea(a)})</span>
            </span>
          </label>
        </div>
      </div>
    );
  }

  // ✅ group with children
  if (!isGroupNode(node)) return null;

  const areas: VacancyArea[] = node.children.map((c) => c.key);

  const selectedCount = areas.reduce(
    (acc, a) => acc + (selectedAreas[a] ? 1 : 0),
    0,
  );

  const allChecked = selectedCount === areas.length;
  const noneChecked = selectedCount === 0;
  const indeterminate = !allChecked && !noneChecked;

  const parentRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (parentRef.current) parentRef.current.indeterminate = indeterminate;
  }, [indeterminate]);

  return (
    <div className={styles.group}>
      <div className={styles.groupHeader}>
        <button
          type="button"
          className={styles.chevButton}
          onClick={onToggleOpen}
          aria-label={open ? "Lukk gruppe" : "Åpne gruppe"}
        >
          <span className={`${styles.chev} ${open ? styles.chevOpen : ""}`} />
        </button>

        <label className={styles.parentRow}>
          <input
            ref={parentRef}
            type="checkbox"
            checked={allChecked}
            onChange={(e) => onSetAreas(areas, e.target.checked)}
          />
          <span className={styles.parentText}>
            {node.label}{" "}
            <span className={styles.count}>({countByAreas(areas)})</span>
          </span>
        </label>
      </div>

      {open && (
        <div className={styles.children}>
          {node.children.map((child) => (
            <label key={child.key} className={styles.childRow}>
              <input
                type="checkbox"
                checked={selectedAreas[child.key]}
                onChange={() => onToggleArea(child.key)}
              />
              <span className={styles.childText}>
                {child.label}{" "}
                <span className={styles.count}>({countByArea(child.key)})</span>
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
