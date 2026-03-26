/**
 * UX-STANDARD CORE ENGINE
 * Система навигации и управления интерфейсом
 */

// 1. ХРАНИЛИЩЕ КОНТЕНТА (Твои тексты от ChatGPT)
const PAGES = {
    home: `
        <section class="hero fade-in">
            <div class="container hero__container">
                <h1 class="hero__title">Создавай <span class="text-gradient">удобные сайты</span> сразу</h1>
                <p class="hero__subtitle">Этот макет — фундамент для быстрых и доступных интерфейсов. Посмотри, как технологии SPA и A11y меняют результат.</p>
                <div class="hero__actions">
                    <button class="btn btn--primary" onclick="route('components')">Попробовать компоненты</button>
                    <button class="btn btn--outline" onclick="route('stats')">Смотреть тесты</button>
                </div>
            </div>
        </section>
    `,
    docs: `
        <section class="container fade-in" style="padding: 120px 0 60px">
            <h1 class="hero__title" style="font-size: 3rem">База <span class="text-gradient">знаний</span></h1>
            <div style="margin-top: 40px; display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                <div>
                    <h3 style="color: var(--accent-color); margin-bottom:15px">📐 Архитектура</h3>
                    <details class="faq-card"><summary>Зачем rem вместо px?</summary><p>rem масштабируется вместе с настройками пользователя. Это база инклюзивности.</p></details>
                    <details class="faq-card"><summary>Почему SPA?</summary><p>Мгновенная смена страниц экономит время и фокус пользователя.</p></details>
                </div>
                <div>
                    <h3 style="color: var(--accent-color); margin-bottom:15px">♿ Доступность</h3>
                    <details class="faq-card"><summary>Семантика HTML</summary><p>Использование правильных тегов (main, nav) помогает скринридерам.</p></details>
                    <details class="faq-card"><summary>Фокус клавиатуры</summary><p>В нашем коде каждый элемент имеет четкую обводку при переходе через Tab.</p></details>
                </div>
            </div>
        </section>
    `,
    components: `
        <section class="container fade-in" style="padding: 120px 0 60px">
            <div class="hero__badge" style="margin-bottom: 20px">
                <span class="badge__dot"></span> UI Kit v1.0
            </div>
            <h1 class="hero__title" style="font-size: clamp(2.5rem, 6vw, 3.5rem)">
                Библиотека <span class="text-gradient">Компонентов</span>
            </h1>
            <p class="hero__subtitle">Готовые паттерны для твоих будущих проектов. Копируй, адаптируй и созидай.</p>
            
            <div class="ui-grid">
                <!-- Блок 1: Кнопки и Индикаторы -->
                <div class="ui-card">
                    <div class="ui-card__title"><span>🔘</span> Кнопки и Бейджи</div>
                    <p style="margin-bottom: 20px; font-size: 0.9rem; color: var(--text-secondary);">Основные элементы взаимодействия и статусов системы.</p>
                    
                    <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 25px;">
                        <button class="btn btn--primary">Главная</button>
                        <button class="btn btn--outline">Вторичная</button>
                    </div>

                    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                        <span class="badge badge--success">Online</span>
                        <span class="badge badge--warning">Pending</span>
                        <span class="badge badge--error">System Error</span>
                    </div>
                </div>

                <!-- Блок 2: Переключатели и Чекбоксы -->
                <div class="ui-card">
                    <div class="ui-card__title"><span>Toggle</span> Переключатели</div>
                    <p style="margin-bottom: 20px; font-size: 0.9rem; color: var(--text-secondary);">Инструменты для быстрого изменения состояний (on/off).</p>
                    
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 15px;">
                        <span>Включить уведомления</span>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider"></span>
                        </label>
                    </div>

                    <div style="display: flex; align-items: center; justify-content: space-between;">
                        <span>Темный режим (демо)</span>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider"></span>
                        </label>
                    </div>
                </div>
                <!-- Блок 3: Скелетоны -->
                <div class="ui-card">
                    <div class="ui-card__title"><span>⏳</span> Loading States</div>
                    <p style="margin-bottom: 20px; font-size: 0.9rem; color: var(--text-secondary);">Скелетоны удерживают внимание пользователя, пока данные подгружаются по SPA-каналам.</p>
                        
                    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
                        <span class="skeleton skeleton-circle"></span>
                        <div style="flex: 1;">
                            <span class="skeleton skeleton-text" style="width: 40%"></span>
                            <span class="skeleton skeleton-text" style="width: 70%"></span>
                        </div>
                    </div>
                    <span class="skeleton skeleton-title"></span>
                </div>

                <!-- Блок 4: Уведомления (Toasts) -->
                <div class="ui-card">
                    <div class="ui-card__title"><span>🔔</span> Notifications</div>
                    <p style="margin-bottom: 20px; font-size: 0.9rem; color: var(--text-secondary);">Инструменты мгновенной обратной связи при действиях пользователя.</p>
                        
                    <button class="btn btn--primary" style="width: 100%" onclick="showToast('Данные успешно сохранены!')">
                        Вызвать уведомление
                    </button>
                        
                    <p style="margin-top: 15px; font-size: 0.8rem; opacity: 0.6; text-align: center;">
                            Нажми, чтобы увидеть анимацию в углу экрана.
                    </p>
                </div>
                <!-- Блок 5: Интерактивные Табы -->
                <div class="ui-card">
                    <div class="ui-card__title"><span>📑</span> Tab System</div>
                    <p style="margin-bottom: 20px; font-size: 0.9rem; color: var(--text-secondary);">Эффективное распределение контента на ограниченном пространстве.</p>
                    
                    <div class="tabs">
                        <button class="tab-btn active" onclick="switchTab(this, 1)">Дизайн</button>
                        <button class="tab-btn" onclick="switchTab(this, 2)">Код</button>
                    </div>
                    <div id="tab-content-demo" style="font-size: 0.9rem; opacity: 0.8; min-height: 40px;">
                        Контент первой вкладки: Архитектура системы.
                    </div>
                </div>

                <!-- Блок 6: Модальные окна (Popups) -->
                <div class="ui-card">
                    <div class="ui-card__title"><span>🖼️</span> Modal Windows</div>
                    <p style="margin-bottom: 20px; font-size: 0.9rem; color: var(--text-secondary);">Фокусировка пользователя на важном действии с эффектом погружения.</p>
                    
                    <button class="btn btn--outline" style="width: 100%" onclick="toggleModal(true)">
                        Открыть модальное окно
                    </button>
                    
                    <p style="margin-top: 15px; font-size: 0.8rem; opacity: 0.6; text-align: center;">
                        Использует backdrop-filter для размытия фона.
                    </p>
                </div>
            </div>
        </section>
    `,
    stats: `
        <section class="container fade-in" style="padding: 120px 0 60px">
            <div class="hero__badge" style="margin-bottom: 20px">
                <span class="badge__dot"></span> Данные бенчмарка 2025
            </div>
            <h1 class="hero__title" style="font-size: clamp(2.5rem, 6vw, 3.5rem)">
                Аналитика <span class="text-gradient">эффективности</span>
            </h1>
            <p class="hero__subtitle">Цифры подтверждают: правильный UX и SPA-архитектура сокращают время ожидания в разы.</p>
            
            <div class="stats-grid">
                <!-- График 1: Скорость выполнения -->
                <div class="chart-card">
                    <h3>⏱ Скорость задач (сек)</h3>
                    <div class="chart-container">
                        <div class="chart-item">
                            <div class="chart-label"><span>Обычный сайт</span> <span>12.4s</span></div>
                            <div class="chart-bar"><div class="chart-fill chart-fill--red" data-width="85%"></div></div>
                        </div>
                        <div class="chart-item">
                            <div class="chart-label"><span>Твой стандарт</span> <span>3.1s</span></div>
                            <div class="chart-bar"><div class="chart-fill" data-width="22%"></div></div>
                        </div>
                    </div>
                </div>

                <!-- График 2: Доступность (Accessibility Score) -->
                <div class="chart-card">
                    <h3>♿ Индекс инклюзивности</h3>
                    <div class="chart-container">
                        <div class="chart-item">
                            <div class="chart-label"><span>Средний гос. сайт</span> <span>42/100</span></div>
                            <div class="chart-bar"><div class="chart-fill chart-fill--red" data-width="42%"></div></div>
                        </div>
                        <div class="chart-item">
                            <div class="chart-label"><span>Твой стандарт</span> <span>98/100</span></div>
                            <div class="chart-bar"><div class="chart-fill" data-width="98%"></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    profile: `
        <section class="container fade-in" style="padding: 120px 0 60px">
            <h1 class="hero__title" style="font-size: 3.5rem">UX <span class="text-gradient">Лаборатория</span></h1>
            <div class="lab-card" style="border: 2px dashed var(--accent-color)">
                <h3>🎨 Тюнинг бренда</h3>
                <input type="range" min="0" max="360" value="220" class="lab-range" oninput="updateBrandColor(this.value)">
                <p>Цветовой тон: <span id="hue-val">220</span>°</p>
            </div>
            <div class="lab-card" style="margin-top: 2rem">
                <h3>⚡ Производительность</h3>
                <div class="render-time"><span id="render-val">0</span> <small>ms</small></div>
            </div>
        </section>
    `,
    contact: `
        <section class="container fade-in" style="padding: 120px 0 60px">
            <h1 class="hero__title" style="font-size: 3rem">Связаться <span class="text-gradient">с автором</span></h1>
            <p class="hero__subtitle">Есть вопросы по стандарту или идеи для коллаборации? Пиши мне напрямую — я всегда открыт для предложений.</p>
            
            <div class="contact-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 50px;">
                
                <!-- Telegram: Прямая связь -->
                <div class="ui-card" style="display: flex; flex-direction: column; align-items: flex-start; border-bottom: 4px solid #0088cc;">
                    <div style="font-size: 2.5rem; margin-bottom: 20px;">✈️</div>
                    <h3>Telegram</h3>
                    <p style="font-size: 0.9rem; margin-bottom: 25px; min-height: 40px;">Самый быстрый способ обсудить код или предложить фичу в реальном времени.</p>
                    <button class="btn btn--primary" style="width: 100%; justify-content: center; background: #0088cc;" onclick="window.open('https://t.me', '_blank')">
                        Написать @fedor6834
                    </button>
                </div>

                <!-- Email: Официальные вопросы -->
                <div class="ui-card" style="display: flex; flex-direction: column; align-items: flex-start; border-bottom: 4px solid var(--accent-color);">
                    <div style="font-size: 2.5rem; margin-bottom: 20px;">📧</div>
                    <h3>Электронная почта</h3>
                    <p style="font-size: 0.9rem; margin-bottom: 25px; min-height: 40px;">Для длинных писем, документации и серьезных предложений по проекту.</p>
                    <div style="display: flex; gap: 10px; width: 100%;">
                        <button class="btn btn--outline" style="flex: 1; justify-content: center;" onclick="window.location.href='mailto:burlakovfedor981@gmail.com'">Написать</button>
                        <button class="btn btn--outline" title="Скопировать" onclick="copyToClipboard('burlakovfedor981@gmail.com')">📋</button>
                    </div>
                </div>

                <!-- GitHub: Код проекта -->
                <div class="ui-card" style="display: flex; flex-direction: column; align-items: flex-start; border-bottom: 4px solid #333;">
                    <div style="font-size: 2.5rem; margin-bottom: 20px;">🐙</div>
                    <h3>GitHub Репозиторий</h3>
                    <p style="font-size: 0.9rem; margin-bottom: 25px; min-height: 40px;">Следи за обновлениями UX-Standard или внеси свой вклад через Pull Requests.</p>
                    <button class="btn btn--outline" style="width: 100%; justify-content: center;" onclick="window.open('https://github.com', '_blank')">К коду на GitHub</button>
                </div>

            </div>
            
            <div style="margin-top: 4rem; text-align: center; opacity: 0.6; font-size: 0.9rem;">
                <p>Локация: Красноярск, Россия | Часовой пояс: GMT+7</p>
            </div>
        </section>
    `
};

// 2. ДВИЖОК РОУТИНГА (SPA)
function route(pageName, element = null) {
    const start = performance.now();
    const main = document.getElementById('app');
    
    // Сначала запускаем анимацию исчезновения (опционально)
    main.style.opacity = 0;

    setTimeout(() => {
        // Меняем контент
        main.innerHTML = PAGES[pageName] || PAGES.home;
        main.style.opacity = 1;

        // Обновляем активную ссылку в меню
        document.querySelectorAll('.nav__link').forEach(link => link.classList.remove('active'));
        if (element) element.classList.add('active');

        // Прокрутка вверх
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        trackRender(start);
        
        // Инициализируем специфичные для страницы скрипты (если есть)
        if (pageName === 'profile') initLab();
    }, 150);
    // Анимация графиков, если мы на странице статистики
    if (pageName === 'stats') {
        setTimeout(() => {
            document.querySelectorAll('.chart-fill').forEach(bar => {
                bar.style.width = bar.getAttribute('data-width');
            });
        }, 300);
    }

}

// 3. СИСТЕМА ДОСТУПНОСТИ (A+)
let currentFontSize = parseInt(localStorage.getItem('fontSize')) || 100;

function updateRootFontSize() {
    document.documentElement.style.fontSize = `${currentFontSize}%`;
    localStorage.setItem('fontSize', currentFontSize);
}

function increaseFont() {
    currentFontSize = currentFontSize >= 150 ? 100 : currentFontSize + 10;
    updateRootFontSize();
}

// 4. ПЕРЕКЛЮЧЕНИЕ ТЕМ
function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// 5. ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ
window.addEventListener('DOMContentLoaded', () => {
    // Восстанавливаем тему
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Восстанавливаем размер шрифта
    updateRootFontSize();
    
    // Загружаем главную
    route('home');
});
// ФУНКЦИИ ЛАБОРАТОРИИ
function updateBrandColor(h) {
    document.documentElement.style.setProperty('--hue', h);
    const valDisplay = document.getElementById('hue-val');
    if (valDisplay) valDisplay.innerText = h;
}

function toggleDebug() {
    const isDebug = document.body.classList.toggle('debug-mode');
    const btn = document.getElementById('debug-btn');
    if (btn) btn.classList.toggle('active', isDebug);
}

// Улучшенный замер скорости (добавь вызов в конец функции route)
function trackRender(start) {
    const end = performance.now();
    const display = document.getElementById('render-val');
    if (display) display.innerText = (end - start).toFixed(2);
}

// Функция для создания уведомлений
function showToast(message) {
    const container = document.getElementById('toast-wrapper');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span class="toast__icon">✓</span> <span class="toast__msg">${message}</span>`;
    
    container.appendChild(toast);
    
    // Плавное появление
    setTimeout(() => toast.classList.add('show'), 100);
    
    // Удаление через 3 секунды
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}
// Логика Модального окна
function toggleModal(show = true) {
    const modal = document.getElementById('main-modal');
    if (show) {
        modal.classList.add('active');
    } else {
        modal.classList.remove('active');
    }
}

// Логика Табов
function switchTab(btn, tabId) {
    // Убираем активный класс у кнопок
    const parent = btn.parentElement;
    parent.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Меняем текст (демо-логика)
    const content = document.getElementById('tab-content-demo');
    if (tabId === 1) content.innerText = "Контент первой вкладки: Архитектура системы.";
    if (tabId === 2) content.innerText = "Контент второй вкладки: Настройки доступности.";
}
// Функция копирования текста (Email) в буфер обмена
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Используем твою функцию уведомлений
        if (typeof showToast === "function") {
            showToast('Email скопирован в буфер обмена!');
        } else {
            alert('Email скопирован!');
        }
    });
}
