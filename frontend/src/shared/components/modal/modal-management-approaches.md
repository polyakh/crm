Here is your content formatted in Markdown:

```markdown
# React Modal Management Approaches

## Current Approach: Zustand State Management

```typescript
export interface ModalState {
  modal: ModalInstance | undefined;
}

const useModalStore = create<ModalStore>()(...);

// Usage
const { isOpen, data, open, close } = useModal(MODAL_NAMES.LEAD);
```

### Pros:
- Centralized state management
- Type-safe
- Easy to test
- Good for complex modal states
- Works with SSR

### Cons:
- No URL persistence
- Can't share modal state via URL
- Additional library dependency
- Might be overkill for simple modals

---

## Alternative 1: URL Query Parameters with React Router

```typescript
import { useSearchParams } from 'react-router-dom';

export const useModal = (modalName: string) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const isOpen = searchParams.get('modal') === modalName;
  const modalData = searchParams.get('modalData');

  const open = (data?: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('modal', modalName);
    if (data) params.set('modalData', data);
    setSearchParams(params);
  };

  const close = () => {
    const params = new URLSearchParams(searchParams);
    params.delete('modal');
    params.delete('modalData');
    setSearchParams(params);
  };

  return { isOpen, modalData, open, close };
};

// Usage
const { isOpen, modalData, open, close } = useModal('lead');
```

### Pros:
- URL-based state persistence
- Shareable modal states
- Browser history support
- No additional state management
- SEO-friendly
- Works with browser back/forward

### Cons:
- Limited data storage (URL length)
- Data is public in URL
- Need to handle URL encoding
- More complex for nested modals

---

## Alternative 2: Hybrid Approach (URL + State)

```typescript
import { useSearchParams } from 'react-router-dom';
import { create } from 'zustand';

interface ModalData {
  [key: string]: unknown;
}

interface ModalStore {
  modalData: ModalData;
  setModalData: (key: string, data: unknown) => void;
  clearModalData: (key: string) => void;
}

const useModalStore = create<ModalStore>()((set) => ({
  modalData: {},
  setModalData: (key, data) =>
    set((state) => ({
      modalData: { ...state.modalData, [key]: data },
    })),
  clearModalData: (key) =>
    set((state) => {
      const { [key]: _, ...rest } = state.modalData;
      return { modalData: rest };
    }),
}));

export const useModal = (modalName: string) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { modalData, setModalData, clearModalData } = useModalStore();

  const isOpen = searchParams.get('modal') === modalName;

  const open = (data?: unknown) => {
    if (data) setModalData(modalName, data);
    const params = new URLSearchParams(searchParams);
    params.set('modal', modalName);
    setSearchParams(params);
  };

  const close = () => {
    clearModalData(modalName);
    const params = new URLSearchParams(searchParams);
    params.delete('modal');
    setSearchParams(params);
  };

  return {
    isOpen,
    data: modalData[modalName],
    open,
    close,
  };
};
```

### Pros:
- URL state for visibility
- Rich data in state
- Best of both worlds
- Still shareable
- Better SEO
- Complex data support

### Cons:
- More complex implementation
- Two sources of truth
- Need to sync state and URL
- Slightly more code

---

## Alternative 3: Context-Based Approach

```typescript
import { createContext, useContext, useState } from 'react';

interface ModalContextType {
  activeModal: string | null;
  modalData: Record<string, unknown>;
  openModal: (name: string, data?: unknown) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider = ({ children }) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [modalData, setModalData] = useState<Record<string, unknown>>({});

  const openModal = (name: string, data?: unknown) => {
    setActiveModal(name);
    if (data) setModalData(prev => ({ ...prev, [name]: data }));
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <ModalContext.Provider value={{ activeModal, modalData, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = (modalName: string) => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal must be used within ModalProvider');

  const { activeModal, modalData, openModal, closeModal } = context;

  return {
    isOpen: activeModal === modalName,
    data: modalData[modalName],
    open: (data?: unknown) => openModal(modalName, data),
    close: closeModal,
  };
};
```

### Pros:
- No external dependencies
- Simple implementation
- React-native friendly
- Easy to test
- Good for small apps

### Cons:
- No URL persistence
- Limited to React context
- Potential performance issues
- Not great for large apps

---

## Recommendations

### For Simple Applications:
- Use **URL Query** approach if SEO and shareability are important
- Use **Context** approach if simplicity is key

### For Medium Applications:
- Use **Hybrid** approach for best balance
- Current **Zustand** approach is good if URL features aren't needed

### For Complex Applications:
- Stick with current **Zustand** approach if you have complex modal states
- Use **Hybrid** approach if URL features are must-have

### Consider Hybrid Approach If You Need:
- URL-based navigation
- Rich modal data
- State persistence
- SEO benefits
- Shareable modal states
```