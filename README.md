This is a starter template for [Learn Next.js](https://nextjs.org/learn).

### Lessons learned

0. Always read and understand the documentations carefully.
1. (() => {}) - does not automatically return the statement(s) thus, needs to implicitly write return inside the curly braces.
2. (() => ()) - automatically returns statement(s) inside the parenthesis
3. Create next.config.js and export image property domain when using external sources.
4. Directly fetch external API on components' getServerSideProps().
5. Do not name assets index other than your index.js in /pages/index. GitHub or Vercel gets confused when any assets are named index.
6. Use SSR if it involves sensitive credentials and tokens.
7. CSR has a delay of 1-2 seconds in rendering after the page loads.
8. console.log(typeof window) is a good way of checking if which side the statement runs.