Frontend Mentor – Testimonials Grid Section Solution

This is my solution to the Testimonials Grid Section challenge
 on Frontend Mentor. Frontend Mentor challenges are designed to help developers practice real-world layout and responsive design skills using modern tools and workflows.

Table of Contents

Overview
    The Challenge
    Links
My Process
    Built With
    What I Learned
    Continued Development
    Useful Resources
Author

Overview
The Challenge

Users should be able to:

-View an optimal layout depending on their device’s screen size
-See a responsive testimonial grid that matches the provided design as closely as possible

The main focus of this challenge was recreating a complex desktop grid layout while maintaining a clean, readable mobile experience.


Links

Solution URL: https://www.frontendmentor.io/solutions/your-solution-link

Live Site URL: https://your-live-site-url.vercel.app

My Process

Built With
    - Semantic HTML5
    - Next.js (App Router)
    - React
    - Tailwind CSS
    - CSS Grid
    - Mobile-first workflow
    - Responsive design principles

What I Learned

This project reinforced the importance of separating layout concerns from presentational components.

Key takeaways:

Mobile-first grid design:
Start with a simple stacked layout and progressively enhance it at larger breakpoints.

Explicit grid placement for complex layouts:
Matching the desktop design required deliberate use of col-start, col-span, and row-span instead of relying on auto-placement.

Reusable component architecture:
The testimonial card was built as a reusable component, with layout-specific grid placement handled by the parent container.

Example of desktop-only placement logic:

<div className="grid gap-6 lg:grid-cols-4">
  <div className="lg:col-span-2">
    <TestimonialCard />
  </div>
  <div className="lg:col-start-3">
    <TestimonialCard />
  </div>
</div>


This approach keeps components flexible and prevents layout rules from leaking into UI elements.

Continued Development

In future projects, I want to continue focusing on:
    - Advanced CSS Grid techniques for complex layouts
    - Creating scalable Tailwind component patterns
    - Writing cleaner, more maintainable component APIs
    - Turning Frontend Mentor solutions into polished portfolio case studies

Useful Resources

    - Tailwind CSS Documentation
    – Essential for responsive utilities and layout control
    - CSS Grid Layout – MDN – Helped solidify grid placement concepts
    - Next.js Documentation – Reference for component structure and image optimization

Author

Website: https://adrianzavala.dev

Frontend Mentor: https://www.frontendmentor.io/profile/yourusername

GitHub: https://github.com/zavaladrian# TestimonialGrids
