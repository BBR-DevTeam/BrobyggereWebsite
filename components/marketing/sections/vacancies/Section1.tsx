"use client";

import { useMemo, useState } from "react";
import styles from "@/styles/marketing/vacancies/vacanciesSection.module.css";
import VacancyItem from "@/components/marketing/elements/VacancyItem";
import { vacanciesData } from "@/utils/marketing/vacanciesData";

type City = "bergen" | "oslo" | "stavanger";
type JobType = "midlertidig" | "fast";

export default function Section1() {
  const [selectedCities, setSelectedCities] = useState<Record<City, boolean>>({
    bergen: true,
    oslo: true,
    stavanger: true,
  });

  const [selectedTypes, setSelectedTypes] = useState<Record<JobType, boolean>>({
    midlertidig: true,
    fast: true,
  });

  const cities: { key: City; label: string }[] = useMemo(
    () => [
      { key: "bergen", label: "Bergen" },
      { key: "oslo", label: "Oslo" },
      { key: "stavanger", label: "Stavanger" },
    ],
    []
  );

  const jobTypes: { key: JobType; label: string }[] = useMemo(
    () => [
      { key: "midlertidig", label: "Midlertidig" },
      { key: "fast", label: "Fast" },
    ],
    []
  );

  const toggleCity = (city: City) => {
    setSelectedCities((prev) => ({ ...prev, [city]: !prev[city] }));
  };

  const toggleType = (type: JobType) => {
    setSelectedTypes((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  // Finn-style counts: counts respect the OTHER active filter group.
  const countByCity = (city: City) => {
    return vacanciesData.filter((v) => {
      const cityOk = v.city === city;

      const typeOk =
        (selectedTypes.fast && v.tags.includes("fast")) ||
        (selectedTypes.midlertidig && v.tags.includes("midlertidig"));

      return cityOk && typeOk;
    }).length;
  };

  const countByType = (type: JobType) => {
    return vacanciesData.filter((v) => {
      const cityOk = selectedCities[v.city];
      const typeOk = v.tags.includes(type);
      return cityOk && typeOk;
    }).length;
  };

  const filteredVacancies = useMemo(() => {
    return vacanciesData.filter((v) => {
      const cityOk = selectedCities[v.city];

      const typeOk =
        (selectedTypes.fast && v.tags.includes("fast")) ||
        (selectedTypes.midlertidig && v.tags.includes("midlertidig"));

      return cityOk && typeOk;
    });
  }, [selectedCities, selectedTypes]);

  return (
    <section className={`section-padding ${styles.topPadding}`}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left column: page title + filters */}
          <aside className={styles.sidebar}>
            <div className={`${styles.leftHeader} heading1-w-modified`}>
              <h2 className="text-anime-style-3">Stillinger</h2>
            </div>

            <div className={styles.filterCard}>
              {/* Group 1 */}
              <h4 className={styles.filterTitle}>Område</h4>
              <div className={styles.filterList}>
                {cities.map((c) => (
                  <label key={c.key} className={styles.checkboxRow}>
                    <input
                      type="checkbox"
                      checked={selectedCities[c.key]}
                      onChange={() => toggleCity(c.key)}
                    />
                    <span>
                      {c.label}{" "}
                      <span className={styles.count}>
                        ({countByCity(c.key)})
                      </span>
                    </span>
                  </label>
                ))}
              </div>

              {/* Group 2 */}
              <div className={styles.filterDivider} />

              <h4 className={styles.filterTitle}>Stillingstype</h4>
              <div className={styles.filterList}>
                {jobTypes.map((t) => (
                  <label key={t.key} className={styles.checkboxRow}>
                    <input
                      type="checkbox"
                      checked={selectedTypes[t.key]}
                      onChange={() => toggleType(t.key)}
                    />
                    <span>
                      {t.label}{" "}
                      <span className={styles.count}>
                        ({countByType(t.key)})
                      </span>
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Right column: job list */}
          <main className={styles.results}>
            <div className={styles.resultsHeader}>
              <p className={styles.resultsSubtitle}>
                {filteredVacancies.length} stillinger tilgjengelig
              </p>
            </div>

            <div className={styles.jobList}>
              {filteredVacancies.map((vacancy) => (
                <VacancyItem key={vacancy.id} vacancy={vacancy} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
