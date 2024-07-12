import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'

function MyNavbar() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">NHCH</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/folder">Folder</Nav.Link>
            <Nav.Link href="/chude">Chủ đề</Nav.Link>
            <Nav.Link href="/dacta">Đặc tả</Nav.Link>
            <Nav.Link href="/cauhoi">Câu hỏi</Nav.Link>
            <Nav.Link href="/dethi">Đề thi</Nav.Link>
          </Nav>
          <Nav className="d-flex">
            <span className='nav-link'>Nguyễn Thanh Vũ</span>
            <Nav.Link href="/login">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;