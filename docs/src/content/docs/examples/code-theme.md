---
title: Code Theme
pagefind: false
---

`starlight-theme-nord` ships with two code syntax highlighting themes powered by [Expressive Code](https://starlight.astro.build/guides/code/):

- **Nord** (dark) — the built-in [Shiki Nord theme](https://shiki.style/themes#nord)
- **Nord Light** — a custom light variant based on the Nord color palette

The examples below demonstrate how these themes look with different languages.

## Overriding Code Themes

To use your own Shiki themes instead of the default Nord themes, pass the `expressiveCode.themes` option in your Starlight configuration:

```diff lang="js"
// astro.config.mjs
import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightThemeNord from 'starlight-theme-nord'

export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightThemeNord()],
      title: 'My Docs',
+      expressiveCode: {
+        themes: ['github-dark', 'github-light'],
+      },
    }),
  ],
})
```

You can use any [Shiki theme](https://shiki.style/themes) or provide a custom theme object. See the [Starlight Expressive Code guide](https://starlight.astro.build/guides/code/) for more details.

To disable code theming entirely, set `expressiveCode` to `false`:

```js
// astro.config.mjs
starlight({
  plugins: [starlightThemeNord()],
  expressiveCode: false,
})
```

## Example

### React

```tsx
/**
 * UserCard.react.tsx
 * Demonstrates the most commonly used React features with TypeScript.
 *
 * Covered:
 *  - Props & TypeScript interfaces
 *  - useState
 *  - useEffect
 *  - useRef
 *  - useMemo / useCallback
 *  - Custom hook
 *  - Conditional rendering
 *  - Event handling
 *  - Context (definition + consumption)
 *  - forwardRef
 *  - Error boundary (class-based, still the standard)
 */

import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  useContext,
  createContext,
  forwardRef,
  Component,
  type ReactNode,
} from "react";

// ─────────────────────────────────────────────
// 1. TypeScript interfaces / types
// ─────────────────────────────────────────────

interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "editor" | "viewer";
}

interface UserCardProps {
  userId: number;
  /** Show extra debug info in development */
  debug?: boolean;
  /** Callback fired when the user clicks "Follow" */
  onFollow?: (user: User) => void;
}

// ─────────────────────────────────────────────
// 2. Context — theme preference
// ─────────────────────────────────────────────

interface ThemeContextValue {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = useCallback(
    () => setTheme((t) => (t === "light" ? "dark" : "light")),
    []
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// ─────────────────────────────────────────────
// 3. Custom hook — data fetching
// ─────────────────────────────────────────────

function useUser(userId: number) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false; // cleanup flag to avoid setting state on unmounted component

    setLoading(true);
    setError(null);

    // Simulated fetch — replace with real API call
    const timer = setTimeout(() => {
      if (cancelled) return;

      // Mock data
      const mockUser: User = {
        id: userId,
        name: "Inori Yamada",
        email: "inori@example.com",
        role: "editor",
      };
      setUser(mockUser);
      setLoading(false);
    }, 800);

    // Cleanup: cancel pending timer when userId changes or component unmounts
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [userId]);

  return { user, loading, error };
}

// ─────────────────────────────────────────────
// 4. forwardRef — exposes input focus externally
// ─────────────────────────────────────────────

interface NoteInputProps {
  placeholder?: string;
  onChange?: (value: string) => void;
}

const NoteInput = forwardRef<HTMLInputElement, NoteInputProps>(
  ({ placeholder = "Add a note…", onChange }, ref) => {
    return (
      <input
        ref={ref}
        placeholder={placeholder}
        style={{ border: "1px solid #ccc", borderRadius: 4, padding: "4px 8px" }}
        onChange={(e) => onChange?.(e.target.value)}
      />
    );
  }
);
NoteInput.displayName = "NoteInput";

// ─────────────────────────────────────────────
// 5. Error Boundary — class component (required by React)
// ─────────────────────────────────────────────

interface ErrorBoundaryState {
  hasError: boolean;
  message: string;
}

class ErrorBoundary extends Component<
  { children: ReactNode },
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false, message: "" };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, message: error.message };
  }

  render() {
    if (this.state.hasError) {
      return <p style={{ color: "red" }}>Something went wrong: {this.state.message}</p>;
    }
    return this.props.children;
  }
}

// ─────────────────────────────────────────────
// 6. Main component
// ─────────────────────────────────────────────

export function UserCard({ userId, debug = false, onFollow }: UserCardProps) {
  // — useState: local UI state
  const [followed, setFollowed] = useState(false);
  const [note, setNote] = useState("");

  // — useContext: consuming theme
  const { theme, toggleTheme } = useContext(ThemeContext);

  // — Custom hook
  const { user, loading, error } = useUser(userId);

  // — useRef: direct DOM access (focus input programmatically)
  const noteInputRef = useRef<HTMLInputElement>(null);

  // — useMemo: derived / expensive computation
  const roleLabel = useMemo(() => {
    const labels: Record<User["role"], string> = {
      admin: "🛡 Admin",
      editor: "✏️ Editor",
      viewer: "👁 Viewer",
    };
    return user ? labels[user.role] : "—";
  }, [user]);

  // — useCallback: stable reference for event handler passed to children
  const handleFollow = useCallback(() => {
    if (!user) return;
    setFollowed((prev) => !prev);
    onFollow?.(user);
  }, [user, onFollow]);

  // — useEffect: side-effect when `followed` changes
  useEffect(() => {
    if (followed) {
      document.title = `Following ${user?.name ?? "user"}`;
    } else {
      document.title = "UserCard Demo";
    }
    // Cleanup when component unmounts
    return () => {
      document.title = "UserCard Demo";
    };
  }, [followed, user]);

  // ── Render ──────────────────────────────────

  const bg = theme === "dark" ? "#1a1a2e" : "#f5f5f5";
  const color = theme === "dark" ? "#eee" : "#222";

  return (
    <ErrorBoundary>
      <div style={{ background: bg, color, padding: 24, borderRadius: 8, maxWidth: 360 }}>
        {/* Theme toggle */}
        <button onClick={toggleTheme} style={{ marginBottom: 16 }}>
          Switch to {theme === "light" ? "dark" : "light"} mode
        </button>

        {/* Conditional rendering */}
        {loading && <p>Loading…</p>}
        {error && <p style={{ color: "salmon" }}>Error: {error}</p>}

        {user && (
          <>
            <h2 style={{ margin: "0 0 4px" }}>{user.name}</h2>
            <p style={{ margin: "0 0 4px", opacity: 0.7 }}>{user.email}</p>
            <p style={{ margin: "0 0 16px" }}>{roleLabel}</p>

            {/* Event handling */}
            <button onClick={handleFollow}>
              {followed ? "✓ Following" : "Follow"}
            </button>

            {/* forwardRef usage */}
            <div style={{ marginTop: 16 }}>
              <NoteInput
                ref={noteInputRef}
                onChange={setNote}
                placeholder="Leave a note…"
              />
              <button
                onClick={() => noteInputRef.current?.focus()}
                style={{ marginLeft: 8 }}
              >
                Focus
              </button>
              {note && <p style={{ marginTop: 8, fontSize: 13, opacity: 0.8 }}>Note: {note}</p>}
            </div>
          </>
        )}

        {/* Debug panel — conditional rendering */}
        {debug && (
          <pre style={{ marginTop: 16, fontSize: 11, opacity: 0.5 }}>
            {JSON.stringify({ userId, followed, note, theme }, null, 2)}
          </pre>
        )}
      </div>
    </ErrorBoundary>
  );
}

// ─────────────────────────────────────────────
// 7. App entry — wraps with provider
// ─────────────────────────────────────────────

export default function App() {
  return (
    <ThemeProvider>
      <UserCard
        userId={1}
        debug
        onFollow={(user) => console.log("Followed:", user)}
      />
    </ThemeProvider>
  );
}
```

### Vue

```vue
<!--
  UserCard.vue
  Demonstrates the most commonly used Vue 3 features with TypeScript + Composition API.

  Covered:
  - defineProps / defineEmits / defineExpose (Composition API macros)
  - ref / reactive
  - computed
  - watch / watchEffect
  - onMounted / onUnmounted (lifecycle hooks)
  - provide / inject
  - Custom composable (useUser)
  - Template features: v-if, v-for, v-model, v-bind, event handling
  - Async component + Suspense (at the bottom)
-->

<script setup lang="ts">
import {
  ref,
  reactive,
  computed,
  watch,
  watchEffect,
  onMounted,
  onUnmounted,
  provide,
  inject,
  defineAsyncComponent,
  type InjectionKey,
} from "vue";

// ─────────────────────────────────────────────
// 1. TypeScript interfaces
// ─────────────────────────────────────────────

interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "editor" | "viewer";
}

// ─────────────────────────────────────────────
// 2. Props & Emits (compiler macros — no import needed)
// ─────────────────────────────────────────────

const props = defineProps<{
  userId: number;
  debug?: boolean;
}>();

const emit = defineEmits<{
  (e: "follow", user: User): void;
  (e: "update:note", value: string): void; // v-model support
}>();

// ─────────────────────────────────────────────
// 3. provide / inject — theme
//    (In a real app, provide() lives in a parent / App.vue)
// ─────────────────────────────────────────────

const ThemeKey: InjectionKey<{ theme: Ref<"light" | "dark">; toggle: () => void }> =
  Symbol("theme");

// Simulating a parent providing theme (would normally be in App.vue)
const _theme = ref<"light" | "dark">("light");
provide(ThemeKey, {
  theme: _theme,
  toggle: () => (_theme.value = _theme.value === "light" ? "dark" : "light"),
});

// Consuming it in the same component for demo purposes
const themeCtx = inject(ThemeKey)!;
const theme = themeCtx.theme;
const toggleTheme = themeCtx.toggle;

// ─────────────────────────────────────────────
// 4. Custom composable — useUser
// ─────────────────────────────────────────────

// In a real project this would live in composables/useUser.ts
import type { Ref } from "vue";

function useUser(userId: Ref<number>) {
  const user = ref<User | null>(null);
  const loading = ref(true);
  const error = ref<string | null>(null);

  let timer: ReturnType<typeof setTimeout>;

  const fetchUser = (id: number) => {
    loading.value = true;
    error.value = null;
    clearTimeout(timer);

    timer = setTimeout(() => {
      // Mock data — replace with real fetch()
      user.value = {
        id,
        name: "Inori Yamada",
        email: "inori@example.com",
        role: "editor",
      };
      loading.value = false;
    }, 800);
  };

  // Re-fetch whenever userId changes
  watch(userId, (id) => fetchUser(id), { immediate: true });

  // Cleanup on composable owner unmount
  onUnmounted(() => clearTimeout(timer));

  return { user, loading, error };
}

// ─────────────────────────────────────────────
// 5. Local state — ref & reactive
// ─────────────────────────────────────────────

const followed = ref(false);
const note = ref("");

// reactive() is useful for grouping related state
const stats = reactive({
  views: 0,
  clicks: 0,
});

// ─────────────────────────────────────────────
// 6. Composable usage
// ─────────────────────────────────────────────

const userIdRef = computed(() => props.userId); // wrap primitive prop in a Ref
const { user, loading, error } = useUser(userIdRef);

// ─────────────────────────────────────────────
// 7. computed — derived values
// ─────────────────────────────────────────────

const roleLabel = computed(() => {
  const labels: Record<User["role"], string> = {
    admin: "🛡 Admin",
    editor: "✏️ Editor",
    viewer: "👁 Viewer",
  };
  return user.value ? labels[user.value.role] : "—";
});

const cardStyle = computed(() => ({
  background: theme.value === "dark" ? "#1a1a2e" : "#f5f5f5",
  color: theme.value === "dark" ? "#eee" : "#222",
  padding: "24px",
  borderRadius: "8px",
  maxWidth: "360px",
}));

// ─────────────────────────────────────────────
// 8. watch — react to specific state changes
// ─────────────────────────────────────────────

watch(followed, (isFollowed) => {
  document.title = isFollowed
    ? `Following ${user.value?.name ?? "user"}`
    : "UserCard Demo";
});

// ─────────────────────────────────────────────
// 9. watchEffect — auto-tracks dependencies
// ─────────────────────────────────────────────

watchEffect(() => {
  // Re-runs whenever `note` or `stats.clicks` change
  if (note.value.length > 0) {
    stats.clicks++;
  }
});

// ─────────────────────────────────────────────
// 10. Lifecycle hooks
// ─────────────────────────────────────────────

onMounted(() => {
  console.log("UserCard mounted, userId:", props.userId);
  stats.views++;
});

onUnmounted(() => {
  document.title = "UserCard Demo";
});

// ─────────────────────────────────────────────
// 11. Event handlers
// ─────────────────────────────────────────────

function handleFollow() {
  if (!user.value) return;
  followed.value = !followed.value;
  emit("follow", user.value);
}

function handleNoteInput(e: Event) {
  const value = (e.target as HTMLInputElement).value;
  note.value = value;
  emit("update:note", value); // supports v-model:note from parent
}

// ─────────────────────────────────────────────
// 12. defineExpose — expose refs to parent via template ref
// ─────────────────────────────────────────────

const noteInputEl = ref<HTMLInputElement | null>(null);

defineExpose({
  focusNote: () => noteInputEl.value?.focus(),
  getUser: () => user.value,
});
</script>

<template>
  <div :style="cardStyle">
    <!-- Theme toggle -->
    <button @click="toggleTheme" style="margin-bottom: 16px">
      Switch to {{ theme === "light" ? "dark" : "light" }} mode
    </button>

    <!-- v-if conditional rendering -->
    <p v-if="loading">Loading…</p>
    <p v-else-if="error" style="color: salmon">Error: {{ error }}</p>

    <template v-else-if="user">
      <h2 style="margin: 0 0 4px">{{ user.name }}</h2>
      <p style="margin: 0 0 4px; opacity: 0.7">{{ user.email }}</p>
      <p style="margin: 0 0 16px">{{ roleLabel }}</p>

      <!-- Event handling with @click -->
      <button @click="handleFollow">
        {{ followed ? "✓ Following" : "Follow" }}
      </button>

      <!-- v-model on native input -->
      <div style="margin-top: 16px">
        <input
          ref="noteInputEl"
          v-model="note"
          placeholder="Leave a note…"
          style="border: 1px solid #ccc; border-radius: 4px; padding: 4px 8px"
        />
        <!-- Or manual binding with @input for emit support -->
        <!--
        <input
          ref="noteInputEl"
          :value="note"
          @input="handleNoteInput"
          placeholder="Leave a note…"
        />
        -->
        <button @click="noteInputEl?.focus()" style="margin-left: 8px">Focus</button>
        <p v-if="note" style="margin-top: 8px; font-size: 13px; opacity: 0.8">
          Note: {{ note }}
        </p>
      </div>

      <!-- v-for list rendering -->
      <ul style="margin-top: 16px; padding-left: 16px; font-size: 13px; opacity: 0.6">
        <li v-for="(value, key) in stats" :key="key">{{ key }}: {{ value }}</li>
      </ul>
    </template>

    <!-- Debug panel — v-if with prop -->
    <pre v-if="debug" style="margin-top: 16px; font-size: 11px; opacity: 0.5">
{{ JSON.stringify({ userId: props.userId, followed, note, theme, stats }, null, 2) }}
    </pre>
  </div>
</template>
```
