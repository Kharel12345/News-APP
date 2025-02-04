const Footer = () => {
    return (
      <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} NewsPortal. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;