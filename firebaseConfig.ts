// FIX: Use a default import for the Firebase v8 compat library to resolve module resolution errors.
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// =================================================================
// IMPORTANT: ACTION REQUIRED
// =================================================================
// The error 'auth/api-key-not-valid' is because these values are
// placeholders. You MUST replace this entire object with your
// actual Firebase project configuration.
//
// How to get your config:
// 1. Go to your Firebase project console.
// 2. Click the gear icon ⚙️ > Project settings.
// 3. In the "General" tab, scroll to "Your apps".
// 4. Find your web app and copy the `firebaseConfig` object.
// 5. Paste it here, replacing everything from `apiKey` to `appId`.
// =================================================================
const firebaseConfig = {
  apiKey: "AIzaSyB4VFsagrYD0-vmQHJdZgBEnStbI3d23yc",
  authDomain: "placementai-app.firebaseapp.com",
  projectId: "placementai-app",
  storageBucket: "placementai-app.firebasestorage.app",
  messagingSenderId: "849501341530",
  appId: "1:849501341530:web:639436e57fa472de1f1563"
};

// Initialize Firebase
// FIX: Use standard compat initialization.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// FIX: Get auth and firestore instances using standard compat syntax.
const auth = firebase.auth();
const db = firebase.firestore();

// FIX: Set persistence to 'none' to support sandboxed environments where all web storage is disabled.
// This stores auth state in memory only and will not persist across page refreshes, but it prevents the app from crashing.
auth.setPersistence(firebase.auth.Auth.Persistence.NONE)
    .catch((error) => {
        console.error("Firebase persistence error:", error);
    });

// FIX: Use only named exports for all services and the firebase namespace to avoid module resolution errors.
export { auth, db, firebase };
