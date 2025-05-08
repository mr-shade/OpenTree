
export const metadata = {
  title: "OpenTree - Create beautiful link pages",
  description: "OpenTree is a free, open-source platform to create beautiful link-in-bio pages",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
