import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import AboutPage from '../pages/AboutPage';
import BanquetPage from '../pages/BanquetPage';
import BookingPage from '../pages/BookingPage';
import ContactPage from '../pages/ContactPage';
import GalleryPage from '../pages/GalleryPage';
import HomePage from '../pages/HomePage';
import OffersPage from '../pages/OffersPage';
import RestaurantPage from '../pages/RestaurantPage';
import RoomDetailsPage from '../pages/RoomDetailsPage';
import RoomsPage from '../pages/RoomsPage';

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/rooms/:roomId" element={<RoomDetailsPage />} />
        <Route path="/banquet" element={<BanquetPage />} />
        <Route path="/restaurant" element={<RestaurantPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/offers" element={<OffersPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
