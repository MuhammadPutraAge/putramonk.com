export default function Footer() {
  return (
    <footer className="p-32 xs:p-24 bg-darkPurple flex justify-center items-center">
      <p className="font font-semibold text-16 xs:text-14 text-white">&copy; {new Date().getFullYear()} Muhammad Putra Age</p>
    </footer>
  )
}