export default function Footer() {
  return (
    <footer className='max-footer-height flex items-center justify-center border-gray-700 bg-[#192949] py-6 pt-6 text-sm text-white z-50'>
      <p>
        &copy; {new Date().getFullYear()} Cloud Hosting. All
        rights reserved.
      </p>
    </footer>
  );
}
