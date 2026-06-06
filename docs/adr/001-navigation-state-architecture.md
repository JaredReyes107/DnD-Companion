# ADR 001: Navigation and State Management Architecture

## Status

Accepted

## Context

The application uses Expo Router for filesystem-based navigation. Previously, navigation was coupled with business logic (AsyncStorage) and hardcoded strings, which made maintenance difficult and broke deep-linking capabilities. The "Selected Character" state was managed globally via ad-hoc storage calls.

## Decision

We will implement a layered architecture for navigation and state:

1. **Architecture Layers**:
   - **UI Layer**: React components using hooks for navigation and state.
   - **Navigation Layer**: Domain-specific navigators and path helpers.
   - **State Layer**: Zustand for application state.
   - **Repository Layer**: Abstraction over persistence (AsyncStorage), split by domain (Character vs Selection).

2. **Technology Choice**:
   - **Zustand**: For lightweight, performant state management.
   - **Zustand Persist Middleware**: For automatic hydration and persistence of the selected character.

3. **Navigation Patterns**:
   - **Paths Helper**: Functional helpers instead of a static registry to avoid duplicating filesystem truth.
   - **Domain Navigators**: Encapsulate navigation logic into domain-specific hooks (e.g., `useCombatNavigator`).
   - **Dynamic Routing**: Use dynamic segments (`[characterId]`) to support Deep Linking and ensure character context is derived from the route.
   - **Source of Truth**: Route parameters (`characterId` from URL) MUST be the primary source of truth for screens. The global store is a fallback/cache.

4. **Performance**:
   - Tabs will use `lazy` loading and `detachInactiveScreens`.

## Consequences

- **Positive**: Stronger type safety, decoupled side effects, improved performance, and first-class Deep Linking support.
- **Negative**: Slightly more boilerplate (Domain Navigators/Repositories), but essential for scalability.
- **Rule of Thumb**: Navigation must remain stateless. A screen should load with just the URL params even if the store is not hydrated.
