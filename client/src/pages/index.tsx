import Head from 'next/head';
import { useTheme } from '@/context/ThemeContext';

export default function Home() {
  // check usage
  // const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main></main>
    </>
  );
}
