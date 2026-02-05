import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getStorage } from "firebase-admin/storage";
import { getFirestore } from "firebase-admin/firestore";

function getEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

const projectId = getEnv("FIREBASE_PROJECT_ID");
const clientEmail = getEnv("FIREBASE_CLIENT_EMAIL");

// Important: convert the "\n" in .env.local back to real newlines
const privateKey = getEnv("FIREBASE_PRIVATE_KEY").replace(/\\n/g, "\n");

// Default storage bucket for Firebase projects
const storageBucket = `${projectId}.appspot.com`;

export const adminApp =
  getApps().length === 0
    ? initializeApp({
        credential: cert({
          projectId,
          clientEmail,
          privateKey,
        }),
        storageBucket,
      })
    : getApps()[0];

export const adminStorage = getStorage(adminApp);
export const adminBucket = adminStorage.bucket();

// ✅ Firestore (for contact form webhook writes)
export const adminDb = getFirestore(adminApp);
