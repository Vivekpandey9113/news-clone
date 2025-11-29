# LiveHindustan Clone (Next.js Assignment)

**Live Demo:** https://news-clone-orcin.vercel.app/

---

## Section A – Requirements

This project is a simplified front-page clone of the **LiveHindustan** news website (https://www.livehindustan.com/) built using **Next.js**.

### 📰 Layout & UI Requirements
- Replicate core layout of a news portal with:
  - Hero / top-story section  
  - List of news articles (cards)  
  - Optional trending / sidebar section  

### 🔗 Data Source
- Use a **fake API**:
  - Either **mock JSON** stored locally  
  - Or data fetched from a **public news API** (e.g. NewsAPI)  

### ⚙️ Next.js Features to Use
- **Next.js Data Fetching**  
  - Choose one: `getStaticProps`, `getServerSideProps`, or ISR  
  - Must **justify** the choice in documentation  
- **Dynamic Routing**  
  - Each article card should link to its own details page  
- **Image Optimization**  
  - Use the `<Image />` component for article images  
- **Styling**  
  - Tailwind CSS recommended but not mandatory  

### 📱 Responsiveness
- UI must support:
  - Desktop  
  - Mobile view  
- Smooth layout adjustments for different screen sizes  

### 🔍 SEO (Optional Bonus)
- Use `<head>` metadata for:
  - Page title  
  - Description  
- Add optional structured data/meta tags for better SEO  

---

## Section B – Design Documentation

### Layout Decisions
- Used a **three-column** layout on desktop  
- **Single-column** on mobile for better readability  
- Highlighted hero article with big image & bold title  
- Other news shown as cards for quick scanning  

### Data-Fetching Strategy
- Used **local mock JSON** + `getStaticProps` for **fast static pages**
- ❌ Data is not real-time — needs redeploy to update  

### Components Used
- `NavBar`, `HeroArticle`, `NewsCard`, `Sidebar`, `Footer`  
- Articles follow a structured data model

---

## Section C – Testing & Edge Cases

| Test Case | Expected Handling |
|----------|------------------|
| No news returned | Show: “No news available” |
| Missing image | Show card without crashing |
| Long titles | Wrap text properly |
| Mobile display | Layout stacks vertically |
| Slow loading | Static build loads instantly |

Known Limitations:
- No automated testing yet  
- Static data only  

---

## Section D – AI Use & Reflection

### How AI Helped
- Understanding Next.js concepts (`getStaticProps`)
- Help with layout, debugging & documentation structure

### What I Did Myself
- Full UI coding  
- Page structure & responsiveness  
- Data setup & deployment  
- Wireframes drawn by me  

### Learnings
- Real news layout structure  
- Component-based development  
- Deployment on Vercel  
- Responsive design skills improved  

Future Improvements:
✔ Real news API  
✔ Article detail pages  
✔ Better SEO  
✔ Unit testing  
✔ Dark mode + animations  

---

## 🛠 How to Run Project

```bash
git clone https://github.com/Vivekpandey9113/news-clone.git
cd news-clone
npm install
npm run dev
