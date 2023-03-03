/* eslint-disable */
import React, { useState } from "react";
import { Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Container, NavbarBrand, Navbar, Nav, NavItem, NavbarToggler, Collapse, NavLink } from "reactstrap";
import Image from "next/legacy/image";
import logo from "../../assets/images/logos/ime-logo.webp";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import logo2 from "../../assets/images/logos/white-logo.png";
import image from "next/legacy/image";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation("common");
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div id="section">
      <div className="header1 po-relative">
        <Container>
          <Navbar className="navbar-expand-lg h1-nav">
            <NavbarBrand>
              <Image src={logo} alt="Industrial Magic Entertainment" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle}>
              <span className="ti-menu"></span>
            </NavbarToggler>
            <Collapse isOpen={isOpen} navbar id="header1" className="justify-content-between">
              <Nav navbar className="ml-auto mt-2 mt-lg-0">
                <NavItem>
                  <Link href="/">{t("nav.home")}</Link>
                </NavItem>
                <NavItem>
                  <Link href="/about-us">{t("nav.about-us")}</Link>
                </NavItem>
                {/* <NavItem>
                  <Link href="/portfolio">{t("nav.portfolio")}</Link>
                </NavItem> */}
                {/* <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav>
                    Services <i className="fa fa-angle-down m-l-5"></i>
                  </DropdownToggle>
                  <DropdownMenu className="b-none animated fadeInUp">
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Another action</DropdownItem>
                    <DropdownItem>Something else here</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Something else here</DropdownItem>
                    <DropdownItem>Separated link</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>One more separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown> */}
              </Nav>
              <Link legacyBehavior href="/contact-us" className="btn btn-outline-info">
                {t("nav.contact-us")}
              </Link>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
