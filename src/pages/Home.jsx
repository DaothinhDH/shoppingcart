import React from 'react'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import Button from '../components/base/button/Button'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Day la trang chu</h1>
      <Button title="Thêm mới" size={120} type="primary" />
      <Button title="Cập nhật" size={120} type="danger" />
      <Footer />
    </div>
  );
}
