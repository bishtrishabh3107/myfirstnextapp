function FrontPageSideScreen() {
  return (
    <div>
      <div className="px-1 py-1 bg-blue-200 h-screen col-start-1 col-end-3 sm:invisible sm:h-10 bg-gradient-to-r from-blue-200 via-pink-200 to-red-300 dark:text-black">
        <h1 className="text-center font-bold py-3">What we work on!</h1>
        <div className="font-semibold">
          <h1>-> SEO Powered</h1>
          <h1>-> React</h1>
          <h1>-> Gatsby</h1>
          <h1>-> Nextjs</h1>
          <h1>-> Backend</h1>
          <h1>-> Servers</h1>
          <h1>-> Digital Mkt</h1>
        </div>
      </div>
    </div>
  );
}

export default FrontPageSideScreen;
