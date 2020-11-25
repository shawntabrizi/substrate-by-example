---
id: structs
title: Structs
---

Structs are one of the most common objects you will see throughout Substrate. In fact, the main part
of every pallet in the runtime is a struct called `Module`:

```rust
decl_module! {
	pub struct Module<T: Trait> for enum Call where origin: T::Origin {
		// --snip--
	}
}
```
