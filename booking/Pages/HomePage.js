class HomePage {
    constructor(page) {
        this.page = page;
        // Placeholder locator — we'll verify this against the real Calendar
        // nav item once you can inspect the home page after login
        this.calendarLink = page.getByRole('link', { name: /calendar/i });
    }

    async openCalendar() {
        await this.calendarLink.waitFor({ state: 'visible' });
        await this.calendarLink.click();
    }
}

module.exports = { HomePage };