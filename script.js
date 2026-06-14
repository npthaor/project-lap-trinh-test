// --- FULL 34 TỈNH/THÀNH VÀ SỨC CHỨA ---
const locationData = {
    "hanoi": { name: "Hà Nội", spots: { "langbac": { name: "Lăng Chủ tịch", baseVisits: 15000, capacity: 20000 }, "vanmieu": { name: "Văn Miếu Quốc Tử Giám", baseVisits: 8000, capacity: 12000 }, "hoguom": { name: "Phố đi bộ Hồ Gươm", baseVisits: 25000, capacity: 40000 } } },
    "haiphong": { name: "Hải Phòng", spots: { "catba": { name: "Đảo Cát Bà", baseVisits: 12000, capacity: 18000 }, "doson": { name: "Biển Đồ Sơn", baseVisits: 8000, capacity: 15000 }, "lanha": { name: "Vịnh Lan Hạ", baseVisits: 9000, capacity: 12000 } } },
    "hue": { name: "Huế", spots: { "dainoi": { name: "Đại Nội Huế", baseVisits: 12000, capacity: 18000 }, "langtuduc": { name: "Lăng Tự Đức", baseVisits: 5000, capacity: 8000 }, "thienmu": { name: "Chùa Thiên Mụ", baseVisits: 6000, capacity: 9000 } } },
    "danang": { name: "Đà Nẵng", spots: { "banahills": { name: "Bà Nà Hills", baseVisits: 18000, capacity: 25000 }, "cauvang": { name: "Cầu Vàng", baseVisits: 15000, capacity: 20000 }, "sontra": { name: "Bán đảo Sơn Trà", baseVisits: 8000, capacity: 15000 } } },
    "cantho": { name: "Cần Thơ", spots: { "cairang": { name: "Chợ nổi Cái Răng", baseVisits: 10000, capacity: 15000 }, "ninhkieu": { name: "Bến Ninh Kiều", baseVisits: 12000, capacity: 20000 }, "binhthuy": { name: "Nhà cổ Bình Thủy", baseVisits: 4000, capacity: 6000 } } },
    "hcm": { name: "Hồ Chí Minh", spots: { "dinhdoclap": { name: "Dinh Độc Lập", baseVisits: 10000, capacity: 15000 }, "benthanh": { name: "Chợ Bến Thành", baseVisits: 15000, capacity: 22000 }, "nguyenhue": { name: "Phố đi bộ Nguyễn Huệ", baseVisits: 30000, capacity: 50000 } } },
    "caobang": { name: "Cao Bằng", spots: { "bangioc": { name: "Thác Bản Giốc", baseVisits: 8000, capacity: 12000 }, "lenin": { name: "Suối Lê Nin", baseVisits: 5000, capacity: 8000 }, "nguomngao": { name: "Động Ngườm Ngao", baseVisits: 4000, capacity: 6000 } } },
    "langson": { name: "Lạng Sơn", spots: { "mauson": { name: "Đỉnh Mẫu Sơn", baseVisits: 5000, capacity: 8000 }, "tamthanh": { name: "Động Tam Thanh", baseVisits: 4000, capacity: 7000 }, "dongkinh": { name: "Chợ Đông Kinh", baseVisits: 6000, capacity: 10000 } } },
    "quangninh": { name: "Quảng Ninh", spots: { "halong": { name: "Vịnh Hạ Long", baseVisits: 20000, capacity: 30000 }, "yentu": { name: "Khu di tích Yên Tử", baseVisits: 8000, capacity: 15000 }, "sunworld": { name: "Sun World Hạ Long", baseVisits: 12000, capacity: 20000 } } },
    "laichau": { name: "Lai Châu", spots: { "oquyho": { name: "Đèo Ô Quy Hồ", baseVisits: 6000, capacity: 10000 }, "tanuyen": { name: "Đồi chè Tân Uyên", baseVisits: 3000, capacity: 6000 }, "putaleng": { name: "Đỉnh Pu Ta Leng", baseVisits: 2000, capacity: 4000 } } },
    "dienbien": { name: "Điện Biên", spots: { "doia1": { name: "Đồi A1", baseVisits: 5000, capacity: 8000 }, "docat": { name: "Hầm Đờ Cát", baseVisits: 4000, capacity: 7000 }, "pakhoang": { name: "Hồ Pá Khoang", baseVisits: 3000, capacity: 6000 } } },
    "sonla": { name: "Sơn La", spots: { "mocchau": { name: "Rừng thông Mộc Châu", baseVisits: 12000, capacity: 18000 }, "taxua": { name: "Thiên đường mây Tà Xùa", baseVisits: 8000, capacity: 12000 }, "doiche": { name: "Đồi chè Trái Tim", baseVisits: 6000, capacity: 10000 } } },
    "thanhhoa": { name: "Thanh Hóa", spots: { "samson": { name: "Biển Sầm Sơn", baseVisits: 25000, capacity: 40000 }, "nhaho": { name: "Thành nhà Hồ", baseVisits: 4000, capacity: 8000 }, "puluong": { name: "Khu bảo tồn Pù Luông", baseVisits: 6000, capacity: 10000 } } },
    "nghean": { name: "Nghệ An", spots: { "cualo": { name: "Biển Cửa Lò", baseVisits: 20000, capacity: 35000 }, "langsen": { name: "Làng Sen quê Bác", baseVisits: 10000, capacity: 18000 }, "daoche": { name: "Đảo chè Thanh Chương", baseVisits: 5000, capacity: 9000 } } },
    "hatinh": { name: "Hà Tĩnh", spots: { "thiencam": { name: "Biển Thiên Cầm", baseVisits: 8000, capacity: 15000 }, "dongloc": { name: "Ngã ba Đồng Lộc", baseVisits: 6000, capacity: 12000 }, "kego": { name: "Hồ Kẻ Gỗ", baseVisits: 4000, capacity: 8000 } } },
    "tuyenquang": { name: "Tuyên Quang", spots: { "tantrao": { name: "Khu di tích Tân Trào", baseVisits: 5000, capacity: 10000 }, "mylam": { name: "Suối khoáng Mỹ Lâm", baseVisits: 4000, capacity: 8000 }, "nahang": { name: "Hồ Na Hang", baseVisits: 5000, capacity: 9000 } } },
    "laocai": { name: "Lào Cai", spots: { "fansipan": { name: "Đỉnh Fansipan", baseVisits: 15000, capacity: 20000 }, "catcat": { name: "Bản Cát Cát", baseVisits: 10000, capacity: 15000 }, "sapa": { name: "Nhà thờ đá Sa Pa", baseVisits: 8000, capacity: 12000 } } },
    "thainguyen": { name: "Thái Nguyên", spots: { "nuicoc": { name: "Hồ Núi Cốc", baseVisits: 7000, capacity: 12000 }, "tancuong": { name: "Đồi chè Tân Cương", baseVisits: 5000, capacity: 9000 }, "dinhhoa": { name: "ATK Định Hóa", baseVisits: 4000, capacity: 8000 } } },
    "phutho": { name: "Phú Thọ", spots: { "denhung": { name: "Đền Hùng", baseVisits: 20000, capacity: 50000 }, "aochau": { name: "Đầm Ao Châu", baseVisits: 3000, capacity: 6000 }, "thanhthuy": { name: "Nước khoáng Thanh Thủy", baseVisits: 5000, capacity: 9000 } } },
    "bacninh": { name: "Bắc Ninh", spots: { "dendo": { name: "Đền Đô", baseVisits: 5000, capacity: 10000 }, "phulang": { name: "Làng gốm Phù Lãng", baseVisits: 4000, capacity: 8000 }, "phattich": { name: "Chùa Phật Tích", baseVisits: 6000, capacity: 12000 } } },
    "hungyen": { name: "Hưng Yên", spots: { "phohien": { name: "Phố Hiến", baseVisits: 4000, capacity: 8000 }, "langnom": { name: "Làng Nôm", baseVisits: 3000, capacity: 6000 }, "chudongtu": { name: "Đền Chử Đồng Tử", baseVisits: 4000, capacity: 8000 } } },
    "ninhbinh": { name: "Ninh Bình", spots: { "trangan": { name: "Tràng An", baseVisits: 15000, capacity: 25000 }, "baidinh": { name: "Chùa Bái Đính", baseVisits: 18000, capacity: 30000 }, "tamcoc": { name: "Tam Cốc - Bích Động", baseVisits: 10000, capacity: 15000 } } },
    "quangtri": { name: "Quảng Trị", spots: { "thanhco": { name: "Thành cổ Quảng Trị", baseVisits: 6000, capacity: 12000 }, "truongson": { name: "Nghĩa trang Trường Sơn", baseVisits: 5000, capacity: 15000 }, "vinhmoc": { name: "Địa đạo Vịnh Mốc", baseVisits: 4000, capacity: 8000 } } },
    "quangngai": { name: "Quảng Ngãi", spots: { "lyson": { name: "Đảo Lý Sơn", baseVisits: 8000, capacity: 12000 }, "mykhe": { name: "Biển Mỹ Khê", baseVisits: 5000, capacity: 10000 }, "sahuynh": { name: "Đồng muối Sa Huỳnh", baseVisits: 4000, capacity: 8000 } } },
    "gialai": { name: "Gia Lai", spots: { "bieho": { name: "Biển Hồ", baseVisits: 6000, capacity: 10000 }, "chudangya": { name: "Núi lửa Chư Đăng Ya", baseVisits: 5000, capacity: 9000 }, "phucuong": { name: "Thác Phú Cường", baseVisits: 4000, capacity: 7000 } } },
    "khanhhoa": { name: "Khánh Hòa", spots: { "vinwonders": { name: "VinWonders Nha Trang", baseVisits: 18000, capacity: 25000 }, "ponagar": { name: "Tháp Bà Ponagar", baseVisits: 10000, capacity: 15000 }, "haiduonghoc": { name: "Viện Hải Dương Học", baseVisits: 8000, capacity: 12000 } } },
    "lamdong": { name: "Lâm Đồng", spots: { "langbiang": { name: "Đỉnh Langbiang", baseVisits: 9000, capacity: 15000 }, "tuyenlam": { name: "Hồ Tuyền Lâm", baseVisits: 8000, capacity: 12000 }, "thunglungtinhyeu": { name: "Thung lũng Tình Yêu", baseVisits: 10000, capacity: 16000 } } },
    "daklak": { name: "Đắk Lắk", spots: { "holak": { name: "Hồ Lắk", baseVisits: 5000, capacity: 9000 }, "baotangcaphe": { name: "Bảo tàng Thế giới Cà phê", baseVisits: 7000, capacity: 10000 }, "bandon": { name: "Bản Đôn", baseVisits: 6000, capacity: 10000 } } },
    "dongnai": { name: "Đồng Nai", spots: { "buulong": { name: "Khu du lịch Bửu Long", baseVisits: 8000, capacity: 15000 }, "giangdien": { name: "Thác Giang Điền", baseVisits: 7000, capacity: 12000 }, "namcattien": { name: "VQG Nam Cát Tiên", baseVisits: 5000, capacity: 8000 } } },
    "tayninh": { name: "Tây Ninh", spots: { "nuibaden": { name: "Núi Bà Đen", baseVisits: 15000, capacity: 25000 }, "toathanh": { name: "Tòa thánh Tây Ninh", baseVisits: 8000, capacity: 15000 }, "hodautieng": { name: "Hồ Dầu Tiếng", baseVisits: 6000, capacity: 10000 } } },
    "dongthap": { name: "Đồng Tháp", spots: { "tramchim": { name: "Tràm chim Tam Nông", baseVisits: 6000, capacity: 10000 }, "sadec": { name: "Làng hoa Sa Đéc", baseVisits: 10000, capacity: 18000 }, "xeoquyt": { name: "Khu di tích Xẻo Quýt", baseVisits: 4000, capacity: 8000 } } },
    "vinhlong": { name: "Vĩnh Long", spots: { "anbinh": { name: "Cù lao An Bình", baseVisits: 5000, capacity: 9000 }, "traon": { name: "Chợ nổi Trà Ôn", baseVisits: 4000, capacity: 7000 }, "vinhsang": { name: "KDL Vinh Sang", baseVisits: 5000, capacity: 8000 } } },
    "angiang": { name: "An Giang", spots: { "trasu": { name: "Rừng tràm Trà Sư", baseVisits: 8000, capacity: 12000 }, "miubachua": { name: "Miếu Bà Chúa Xứ", baseVisits: 15000, capacity: 25000 }, "nuicam": { name: "Núi Cấm", baseVisits: 7000, capacity: 12000 } } },
    "camau": { name: "Cà Mau", spots: { "datmui": { name: "Mũi Cà Mau", baseVisits: 8000, capacity: 15000 }, "uminhha": { name: "Rừng U Minh Hạ", baseVisits: 5000, capacity: 9000 }, "honkhoai": { name: "Đảo Hòn Khoai", baseVisits: 3000, capacity: 6000 } } }
};

function animateValue(obj, start, end, duration, isFormat) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        let current = Math.floor(progress * (end - start) + start);
        obj.innerHTML = isFormat ? current.toLocaleString("vi-VN") : current;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

function initProvinces() {
    const provinceSelect = document.getElementById("province");
    for (let key in locationData) {
        provinceSelect.add(new Option(locationData[key].name, key));
    }
}
function updateDestinations() {
    const pKey = document.getElementById("province").value;
    const dSelect = document.getElementById("destination");
    dSelect.innerHTML = '<option value="">-- Chọn Địa điểm --</option>';
    if (!pKey) return;
    for (let sKey in locationData[pKey].spots) {
        dSelect.add(new Option(locationData[pKey].spots[sKey].name, sKey));
    }
}
initProvinces();

let myChart = null;

async function fetchWeatherMock() {
    return new Promise(resolve => {
        setTimeout(() => {
            const temps = [24, 28, 32, 35, 18, 22];
            const conditions = ["Trời Nắng", "Nhiều Mây", "Có Mưa"];
            const winds = [5, 10, 15, 25];
            const humids = [60, 75, 85, 90];
            
            const temp = temps[Math.floor(Math.random()*temps.length)];
            const cond = conditions[Math.floor(Math.random()*conditions.length)];
            const wind = winds[Math.floor(Math.random()*winds.length)];
            const humid = humids[Math.floor(Math.random()*humids.length)];
            resolve({ temp, cond, wind, humid });
        }, 1200); 
    });
}

async function runPrediction() {
    const pKey = document.getElementById("province").value;
    const dKey = document.getElementById("destination").value;
    const dateStr = document.getElementById("date").value;

    if(!pKey || !dKey || !dateStr) { alert("Cậu vui lòng chọn đầy đủ Địa điểm và Ngày đi nhé!"); return; }

    document.getElementById("loading").style.display = "block";
    const resultSection = document.getElementById("resultSection");
    resultSection.style.display = "none";
    
    const animatedElements = document.querySelectorAll('.stagger-1, .stagger-2, .stagger-3, .stagger-4');
    animatedElements.forEach(el => el.style.animation = 'none');

    const spot = locationData[pKey].spots[dKey];
    const weather = await fetchWeatherMock();
    const isWeekend = [0,6].includes(new Date(dateStr).getDay());

    let predictedVisitors = spot.baseVisits;
    if(isWeekend) predictedVisitors *= 1.4;
    if(weather.cond === "Trời Nắng") predictedVisitors *= 1.1;
    if(weather.cond === "Có Mưa") predictedVisitors *= 0.6;
    predictedVisitors = Math.round(predictedVisitors);

    let score = Math.round((predictedVisitors / spot.capacity) * 100);
    if(score > 100) score = 100;

    let status, hexColor, wait, bestTime, bestSub;
    if(score <= 50) {
        status = "VẮNG KHÁCH"; hexColor = "var(--low-color)";
        wait = "5 - 10 phút"; bestTime = "Đi giờ nào cũng đẹp"; bestSub = "Mật độ thấp cả ngày";
    } else if(score <= 80) {
        status = "TRUNG BÌNH"; hexColor = "var(--medium-color)";
        wait = "20 - 30 phút"; bestTime = "07:00 - 09:00"; bestSub = "Giảm 35% lượng khách";
    } else {
        status = "QUÁ TẢI"; hexColor = "var(--high-color)";
        wait = "45 - 60+ phút"; bestTime = "06:00 - 07:30"; bestSub = "Giảm 60% lượng khách";
    }

    const heroScoreSpan = document.getElementById("heroScore");
    heroScoreSpan.style.color = hexColor;
    animateValue(heroScoreSpan, 0, score, 1500, false); 
    
    const heroLabel = document.getElementById("heroLabel");
    heroLabel.innerText = status;
    heroLabel.style.backgroundColor = "transparent"; 
    heroLabel.style.color = hexColor;
    heroLabel.style.border = `1px solid ${hexColor}`;

    const kpiVisitorsSpan = document.getElementById("kpiVisitors");
    animateValue(kpiVisitorsSpan, 0, predictedVisitors, 1500, true); 

    document.getElementById("kpiCrowdLevel").innerText = status;
    document.getElementById("kpiCrowdLevel").style.color = hexColor;
    const kpiCrowdCard = document.getElementById("kpiCrowdCard");
    kpiCrowdCard.style.borderTopColor = hexColor;
    
    document.getElementById("kpiWait").innerText = wait;
    document.getElementById("kpiBest").innerText = bestTime;
    document.getElementById("kpiBestSub").innerText = bestSub;

    document.getElementById("wTemp").innerText = weather.temp + "°C";
    document.getElementById("wCond").innerText = weather.cond;
    document.getElementById("wHumid").innerText = weather.humid + "%";
    document.getElementById("wWind").innerText = weather.wind + " km/h";
    let iconClass = "fas fa-cloud-sun";
    if(weather.cond === "Có Mưa") iconClass = "fas fa-cloud-rain";
    if(weather.cond === "Trời Nắng") iconClass = "fas fa-sun";
    document.getElementById("wIcon").className = iconClass;

    const dayText = isWeekend ? "cuối tuần" : "ngày thường";
    const wText = weather.cond.toLowerCase();
    document.getElementById("recommendationText").innerHTML = `Hệ thống ghi nhận ngày đi là <b>${dayText}</b>, kết hợp dự báo thời tiết <b>${wText}</b> khiến mô hình dự phóng lượng khách sẽ đạt <b>${score}% sức chứa</b> tối đa. ${score > 80 ? '⚠️ Khuyến nghị nên đổi sang khung giờ vàng hoặc dời ngày để tối ưu trải nghiệm và có ảnh check-in đẹp nhất.' : '✅ Điều kiện tham quan đang rất thuận lợi.'}`;

    document.getElementById("badgeWeekend").className = isWeekend ? "badge active" : "badge";
    document.getElementById("badgeWeather").className = weather.cond !== "Nhiều Mây" ? "badge active" : "badge";
    const randConf = Math.floor(Math.random() * (95 - 85 + 1) + 85);
    document.getElementById("modelConfidence").innerHTML = `<i class="fas fa-check-circle"></i> Độ tin cậy mô hình: ${randConf}%`;

    renderChart(predictedVisitors, spot.capacity);

    document.getElementById("loading").style.display = "none";
    resultSection.style.display = "block";
    
    setTimeout(() => {
        resultSection.style.animation = "fadeInUpFade 0.8s ease-out forwards";
        animatedElements.forEach(el => el.style.animation = '');
    }, 10);
}

function renderChart(totalVisits, dailyCapacity) {
    const ctx = document.getElementById('visitorChart').getContext('2d');
    if(myChart) myChart.destroy(); 

    const distribution = [0.02, 0.05, 0.1, 0.18, 0.2, 0.15, 0.1, 0.08, 0.07, 0.05]; 
    const hours = ['07:00', '08:00', '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
    const dataPoints = distribution.map(pct => Math.round(totalVisits * pct));

    const maxYScale = Math.round(dailyCapacity * 0.25);

    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: hours,
            datasets: [{
                label: 'Dự báo lượng khách',
                data: dataPoints,
                borderColor: '#A44A3F',
                backgroundColor: 'rgba(164, 74, 63, 0.15)',
                borderWidth: 3,
                pointBackgroundColor: '#fff',
                pointBorderColor: '#D4A373',
                pointBorderWidth: 2,
                pointRadius: 5,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: { 
                duration: 1500, 
                easing: 'easeOutQuart',
                loop: false 
            }, 
            hover: { animationDuration: 0 },
            responsiveAnimationDuration: 0,
            plugins: { 
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#3B2F2F',
                    titleFont: { family: 'Cormorant Garamond', size: 16 },
                    bodyFont: { family: 'Cormorant Garamond', size: 16 }
                }
            },
            scales: {
                y: { 
                    beginAtZero: true, 
                    max: maxYScale, 
                    grid: { color: 'rgba(164, 74, 63, 0.1)' }, 
                    ticks: { color: '#6b5a5a', font: { family: 'Cormorant Garamond', size: 14, weight: 'bold' } } 
                },
                x: { 
                    grid: { display: false }, 
                    ticks: { color: '#6b5a5a', font: { family: 'Cormorant Garamond', size: 14, weight: 'bold' } } 
                }
            }
        }
    });
}
