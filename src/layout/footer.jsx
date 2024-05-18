function Footer() {
   return (
      <footer className="page-footer #d50000 red accent-4">
         <div className="footer-copyright">
            <div className="container">
               by D © {new Date().getFullYear()}
               <a className="grey-text text-lighten-4 right" href="https://github.com/zanozzzza/react1">
                  Repository
               </a>
            </div>
         </div>
      </footer>
   );
}
export {Footer};
