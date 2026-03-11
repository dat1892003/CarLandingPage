// AutoCenter Landing Page - JavaScript

// Car Data
const carsData = {
    'mercedes-s-class': {
        name: 'Mercedes-Benz S-Class',
        category: 'Sedan Cao Cấp',
        price: 'Từ 4.5 tỷ VNĐ',
        badge: { text: 'Bán chạy', class: 'bg-primary' },
        description: 'Mercedes-Benz S-Class đại diện cho đỉnh cao của sự sang trọng và công nghệ ô tô. Với thiết kế tinh tế, nội thất đẳng cấp và hàng loạt tính năng an toàn tiên tiến, S-Class mang đến trải nghiệm lái xe êm ái và thoải mái nhất. Đây là lựa chọn hoàn hảo cho những ai tìm kiếm sự kết hợp giữa hiệu suất, sang trọng và công nghệ hàng đầu.',
        images: [
            'https://images.unsplash.com/photo-1707407772603-274cc5cf18f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzZWRhbiUyMGNhcnxlbnwxfHx8fDE3NjA5MTAyNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
            'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
            'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080'
        ],
        specs: {
            engine: '3.0L V6 Turbo',
            fuel: 'Xăng',
            transmission: 'Tự động 9 cấp',
            year: '2024',
            power: '367 mã lực',
            torque: '500 Nm',
            acceleration: '5.1 giây (0-100 km/h)',
            topSpeed: '250 km/h (giới hạn điện tử)',
            consumption: '8.5 L/100km',
            seats: '5 chỗ ngồi',
            drive: 'Dẫn động cầu sau (RWD)',
            dimensions: '5,289 x 1,954 x 1,503 mm'
        },
        features: [
            'Hệ thống đèn LED thông minh MULTIBEAM',
            'Hệ thống treo khí nén AIRMATIC thích ứng',
            'Màn hình giải trí MBUX 12.8 inch',
            'Hệ thống âm thanh Burmester 3D',
            'Ghế massage và sưởi ấm',
            'Hệ thống lái tự động cấp độ 2',
            'Cảnh báo va chạm và phanh khẩn cấp',
            '9 túi khí an toàn',
            'Kiểm soát hành trình thích ứng',
            'Hệ thống đỗ xe tự động',
            'Cửa sổ trời toàn cảnh Panoramic',
            'Điều hòa tự động 4 vùng'
        ]
    },
    'porsche-911-turbo': {
        name: 'Porsche 911 Turbo',
        category: 'Xe Thể Thao',
        price: 'Từ 12.8 tỷ VNĐ',
        badge: { text: 'Mới về', class: 'bg-primary' },
        description: 'Porsche 911 Turbo là biểu tượng của hiệu suất và thiết kế xe thể thao. Với động cơ twin-turbo mạnh mẽ, khả năng tăng tốc đáng kinh ngạc và hệ thống khí động học tiên tiến, 911 Turbo mang đến trải nghiệm lái xe thể thao đỉnh cao. Thiết kế vượt thời gian kết hợp với công nghệ hiện đại tạo nên một siêu xe hoàn hảo cho cả đường phố và đường đua.',
        images: [
            'https://images.unsplash.com/photo-1676112687117-0261d7a84f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzcG9ydHMlMjBjYXJ8ZW58MXx8fHwxNzYwOTQwMTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
            'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
            'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080'
        ],
        specs: {
            engine: '3.8L Flat-6 Twin-Turbo',
            fuel: 'Xăng',
            transmission: 'PDK 8 cấp',
            year: '2024',
            power: '640 mã lực',
            torque: '800 Nm',
            acceleration: '2.7 giây (0-100 km/h)',
            topSpeed: '330 km/h',
            consumption: '11.3 L/100km',
            seats: '4 chỗ ngồi',
            drive: 'Dẫn động 4 bánh (AWD)',
            dimensions: '4,535 x 1,900 x 1,297 mm'
        },
        features: [
            'Hệ thống khí động học chủ động',
            'Phanh gốm composite PCCB',
            'Hệ thống treo PASM thích ứng',
            'Hệ thống lái động học phía sau',
            'Hộp số PDK 8 cấp với Launch Control',
            'Màn hình PCM 10.9 inch',
            'Hệ thống âm thanh Bose Surround',
            'Ghế thể thao điều chỉnh điện 18 hướng',
            'Chế độ lái Sport và Sport Plus',
            'Camera 360 độ',
            'Hệ thống kiểm soát ổn định PSM',
            'Đèn LED Matrix thích ứng'
        ]
    },
    'range-rover-sport': {
        name: 'Range Rover Sport',
        category: 'SUV Hạng Sang',
        price: 'Từ 6.2 tỷ VNĐ',
        badge: null,
        description: 'Range Rover Sport là sự kết hợp hoàn hảo giữa khả năng địa hình vượt trội và sự sang trọng đẳng cấp. Với thiết kế mạnh mẽ, nội thất cao cấp và công nghệ off-road tiên tiến, Range Rover Sport có thể chinh phục mọi địa hình trong khi vẫn đảm bảo sự thoải mái tối đa. Đây là lựa chọn lý tưởng cho những ai muốn có một chiếc SUV vừa mạnh mẽ vừa sang trọng.',
        images: [
            'https://images.unsplash.com/photo-1681331788913-09bb483f91f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXYlMjBjYXIlMjBkcml2aW5nfGVufDF8fHx8MTc2MDk0MDQwMXww&ixlib=rb-4.1.0&q=80&w=1080',
            'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
            'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080'
        ],
        specs: {
            engine: '3.0L Inline-6 Mild Hybrid',
            fuel: 'Dầu diesel',
            transmission: 'Tự động 8 cấp',
            year: '2024',
            power: '350 mã lực',
            torque: '700 Nm',
            acceleration: '6.3 giây (0-100 km/h)',
            topSpeed: '225 km/h',
            consumption: '8.0 L/100km',
            seats: '5-7 chỗ ngồi',
            drive: 'Dẫn động 4 bánh (AWD)',
            dimensions: '4,946 x 2,209 x 1,820 mm'
        },
        features: [
            'Hệ thống Terrain Response 2',
            'Hệ thống treo khí nén điều chỉnh tự động',
            'Màn hình cảm ứng Pivi Pro 13.1 inch',
            'Hệ thống âm thanh Meridian 3D',
            'Ghế da Windsor với chức năng massage',
            'Cửa sổ trời Panoramic kính kép',
            'Hệ thống đèn LED Matrix thích ứng',
            'Camera địa hình ClearSight',
            'Wade Sensing - cảm biến lội nước',
            'Hệ thống kiểm soát xuống dốc',
            'Phanh khẩn cấp tự động',
            'Điều hòa tự động 4 vùng với lọc PM2.5'
        ]
    },
    'tesla-model-s-plaid': {
        name: 'Tesla Model S Plaid',
        category: 'Sedan Điện',
        price: 'Từ 3.8 tỷ VNĐ',
        badge: { text: 'Xanh', class: 'bg-success' },
        description: 'Tesla Model S Plaid là một trong những chiếc xe điện nhanh nhất thế giới. Với ba động cơ điện mạnh mẽ, khả năng tăng tốc kinh ngạc và tầm hoạt động ấn tượng, Model S Plaid đặt lại tiêu chuẩn cho xe điện hiệu suất cao. Nội thất tối giản với màn hình trung tâm 17 inch và công nghệ Autopilot tiên tiến tạo nên trải nghiệm lái xe của tương lai.',
        images: [
            'https://images.unsplash.com/photo-1742940796393-e6a4a9d0ac15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBtb2Rlcm58ZW58MXx8fHwxNzYwOTQwNDAyfDA&ixlib=rb-4.1.0&q=80&w=1080',
            'https://images.unsplash.com/photo-1560958089-b8a1929cea89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
            'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080'
        ],
        specs: {
            engine: 'Tri Motor (3 động cơ điện)',
            fuel: 'Điện',
            transmission: '1 cấp tự động',
            year: '2024',
            power: '1,020 mã lực',
            torque: '1,420 Nm',
            acceleration: '1.99 giây (0-100 km/h)',
            topSpeed: '322 km/h',
            consumption: '18.7 kWh/100km',
            seats: '5 chỗ ngồi',
            drive: 'Dẫn động 3 cầu',
            dimensions: '5,021 x 1,987 x 1,431 mm'
        },
        features: [
            'Pin 100 kWh - tầm hoạt động 628 km',
            'Sạc nhanh Supercharger V3',
            'Autopilot với khả năng tự lái cấp độ 2',
            'Màn hình cảm ứng 17 inch trung tâm',
            'Hệ thống âm thanh 22 loa',
            'Ghế sưởi ấm và thông gió',
            'Cửa sổ trời toàn cảnh',
            'Chế độ Track Mode cho đường đua',
            'Tính năng Ludicrous Mode',
            'Over-the-air software updates',
            'Cốp trước và sau rộng rãi',
            'Hệ thống lọc không khí HEPA'
        ]
    }
};

// Show car detail modal
function showCarDetail(carId) {
    console.log('showCarDetail called with carId:', carId);
    const car = carsData[carId];
    if (!car) {
        console.error('Car not found:', carId);
        return;
    }

    console.log('Car data:', car);

    // Set modal title and category
    document.getElementById('carDetailModalLabel').textContent = car.name;
    document.getElementById('carCategory').textContent = car.category;
    document.getElementById('carPrice').textContent = car.price;
    document.getElementById('carDescription').textContent = car.description;

    // Set badge
    const badgeContainer = document.getElementById('carBadge');
    if (car.badge) {
        badgeContainer.innerHTML = `<span class="badge ${car.badge.class}">${car.badge.text}</span>`;
    } else {
        badgeContainer.innerHTML = '';
    }

    // Set quick info
    document.getElementById('engineQuick').textContent = car.specs.engine;
    document.getElementById('fuelQuick').textContent = car.specs.fuel;
    document.getElementById('transmissionQuick').textContent = car.specs.transmission;
    document.getElementById('yearQuick').textContent = car.specs.year;

    // Set images carousel
    const carouselIndicators = document.getElementById('carouselIndicators');
    const carouselImages = document.getElementById('carouselImages');
    carouselIndicators.innerHTML = '';
    carouselImages.innerHTML = '';

    car.images.forEach((image, index) => {
        // Add indicator
        const indicator = document.createElement('button');
        indicator.type = 'button';
        indicator.setAttribute('data-bs-target', '#carImageCarousel');
        indicator.setAttribute('data-bs-slide-to', index);
        if (index === 0) indicator.classList.add('active');
        carouselIndicators.appendChild(indicator);

        // Add image
        const carouselItem = document.createElement('div');
        carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        carouselItem.innerHTML = `<img src="${image}" class="d-block w-100 rounded" alt="${car.name}" style="height: 400px; object-fit: cover;">`;
        carouselImages.appendChild(carouselItem);
    });

    // Set specs table
    const specsTable = document.getElementById('specsTable');
    specsTable.innerHTML = '';
    const specsLabels = {
        engine: 'Động cơ',
        fuel: 'Nhiên liệu',
        transmission: 'Hộp số',
        year: 'Năm sản xuất',
        power: 'Công suất',
        torque: 'Mô-men xoắn',
        acceleration: 'Tăng tốc',
        topSpeed: 'Tốc độ tối đa',
        consumption: 'Tiêu hao nhiên liệu',
        seats: 'Số chỗ ngồi',
        drive: 'Hệ dẫn động',
        dimensions: 'Kích thước (DxRxC)'
    };

    Object.entries(car.specs).forEach(([key, value]) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="fw-bold">${specsLabels[key]}</td>
            <td>${value}</td>
        `;
        specsTable.appendChild(row);
    });

    // Set features list
    const featuresList = document.getElementById('featuresList');
    featuresList.innerHTML = '';
    for (let i = 0; i < car.features.length; i += 2) {
        const row = document.createElement('div');
        row.className = 'row g-2 mb-2';
        
        const col1 = document.createElement('div');
        col1.className = 'col-md-6';
        col1.innerHTML = `
            <div class="d-flex align-items-start">
                <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                <span>${car.features[i]}</span>
            </div>
        `;
        row.appendChild(col1);

        if (car.features[i + 1]) {
            const col2 = document.createElement('div');
            col2.className = 'col-md-6';
            col2.innerHTML = `
                <div class="d-flex align-items-start">
                    <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                    <span>${car.features[i + 1]}</span>
                </div>
            `;
            row.appendChild(col2);
        }

        featuresList.appendChild(row);
    }

    // Show modal
    console.log('Showing modal...');
    const modalElement = document.getElementById('carDetailModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing...');

    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });

    // Handle view detail button clicks
    const viewDetailBtns = document.querySelectorAll('.view-detail-btn');
    console.log('Found view detail buttons:', viewDetailBtns.length);
    
    viewDetailBtns.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('View detail button clicked');
            const carCard = this.closest('.car-card');
            const carId = carCard.getAttribute('data-car-id');
            console.log('Car ID:', carId);
            showCarDetail(carId);
        });
    });

    // Handle car card clicks (excluding button clicks)
    const carCards = document.querySelectorAll('.car-card');
    console.log('Found car cards:', carCards.length);
    
    carCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking the button
            if (!e.target.closest('.view-detail-btn')) {
                console.log('Car card clicked');
                const carId = this.getAttribute('data-car-id');
                console.log('Car ID:', carId);
                showCarDetail(carId);
            }
        });

        // Add pointer cursor on hover
        card.style.cursor = 'pointer';
    });

    // Handle modal footer buttons
    const bookTestDriveBtn = document.getElementById('bookTestDriveBtn');
    if (bookTestDriveBtn) {
        bookTestDriveBtn.addEventListener('click', function() {
            const modalElement = document.getElementById('carDetailModal');
            const modal = bootstrap.Modal.getInstance(modalElement);
            if (modal) modal.hide();
            
            // Scroll to contact form
            setTimeout(() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    const headerOffset = 100;
                    const elementPosition = contactSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Show toast
                    const toastElement = document.getElementById('successToast');
                    if (toastElement) {
                        toastElement.querySelector('.toast-body').textContent = 'Vui lòng điền thông tin để đặt lịch lái thử!';
                        const toast = new bootstrap.Toast(toastElement);
                        toast.show();
                    }
                }
            }, 300);
        });
    }

    const contactBtn = document.getElementById('contactBtn');
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            const modalElement = document.getElementById('carDetailModal');
            const modal = bootstrap.Modal.getInstance(modalElement);
            if (modal) modal.hide();
            
            // Show contact info toast
            setTimeout(() => {
                const toastElement = document.getElementById('successToast');
                if (toastElement) {
                    toastElement.querySelector('.toast-body').textContent = 'Hotline: 0901 234 567 | Email: info@autocenter.vn';
                    const toast = new bootstrap.Toast(toastElement);
                    toast.show();
                }
            }, 300);
        });
    }

    // Contact Form Validation and Submit
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            event.stopPropagation();

            if (contactForm.checkValidity()) {
                // Get form data
                const formData = {
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    phone: document.getElementById('phone').value,
                    interest: document.getElementById('interest').value,
                    message: document.getElementById('message').value
                };

                // Log form data (in production, send to server)
                console.log('Form Data:', formData);

                // Show success toast
                const toastElement = document.getElementById('successToast');
                if (toastElement) {
                    toastElement.querySelector('.toast-body').textContent = 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.';
                    const toast = new bootstrap.Toast(toastElement);
                    toast.show();
                }

                // Reset form
                contactForm.reset();
                contactForm.classList.remove('was-validated');
            } else {
                contactForm.classList.add('was-validated');
            }
        });
    }

    // Add scroll to top button dynamically
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.id = 'scrollTopBtn';
    scrollTopBtn.innerHTML = '<i class="bi bi-arrow-up"></i>';
    scrollTopBtn.title = 'Lên đầu trang';
    document.body.appendChild(scrollTopBtn);

    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    // Show/hide scroll to top button
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        }
    });
});

// Booking appointment buttons
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.btn-primary').forEach(button => {
        if (button.textContent.includes('Đặt Lịch Hẹn') || button.textContent.includes('Đặt Lịch Lái Thử')) {
            button.addEventListener('click', function(e) {
                if (this.getAttribute('href') !== '#contact') {
                    e.preventDefault();
                    // Scroll to contact form
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                        const headerOffset = 100;
                        const elementPosition = contactSection.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        }
    });
});

// Console welcome message
console.log('%c🚗 AutoCenter Landing Page', 'font-size: 20px; font-weight: bold; color: #0d6efd;');
console.log('%cBuilt with Bootstrap 5, AOS, and vanilla JavaScript', 'font-size: 12px; color: #6c757d;');
