<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- The public site uses five TanStack routes with shared Luxora chrome in `src/components/luxora.tsx`, keeping page structure consistent and route metadata independent.
- Public inquiry forms write through a validated server function using the privileged database client because anonymous visitors must submit without gaining table read access.
- Travel stories live in a homepage editorial selector, using original carnet artwork and privacy-safe summaries rather than publishing personal itinerary PDFs.
- Site-wide CTA motion is centralized in the shared Button variant, while major display headings use the reusable CascadeTitle component (rain-cascade letter fall) so accessibility and reduced-motion remain consistent.
- Homepage customer feedback uses the reusable CircularTestimonials carousel with privacy-safe source material, preserving client anonymity and avoiding invented endorsements.
