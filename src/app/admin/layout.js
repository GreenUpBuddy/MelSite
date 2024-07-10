import SessionProviderClientComponent from "../components/SessionProviderClientComponent";
import { getServerSession } from "next-auth";
export default async function RootLayout({
    children,
  }) {
    const session = await getServerSession();

    return (
      <html lang="en">
        <body>
          <SessionProviderClientComponent session={session}>
            <main>
              {children}
            </main>
          </SessionProviderClientComponent>
        </body>
      </html>
    );
  }
  