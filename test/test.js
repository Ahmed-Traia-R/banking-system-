const webdriver = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const uri = 'http://localhost:3000';

const browser = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

describe('test login page', function() {
    this.timeout(10000);

    before(() => browser.navigate().to(uri + '/login'));

    it('validate the login forms', function() {
	browser.findElement({id: 'user'}).sendKeys('test');
        browser.findElement({id: 'password'}).sendKeys('test');
        return Promise.all([
            expect(browser.findElement({id: 'user'}).getAttribute('value')).to.eventually.equal('test'),
            expect(browser.findElement({id: 'password'}).getAttribute('value')).to.eventually.equal('test'),
        ]);
    });

    it('validate the submission button1', function() {
        browser.findElement({id: 'user'}).sendKeys('');
        return browser.findElements({id: 'submit'}).then(found => !!found.length);
    });

    it('validate the submission button2', function() {
        browser.findElement({id: 'password'}).sendKeys('');
        return browser.findElements({id: 'submit'}).then(found => !!found.length);
    });

    it('validate the submission button', function() {
        browser.findElement({id: 'user'}).sendKeys('test');
        browser.findElement({id: 'password'}).sendKeys('test');
        return browser.findElement({id: 'submit'}).click();
    });

    after(() => browser.quit());
});
