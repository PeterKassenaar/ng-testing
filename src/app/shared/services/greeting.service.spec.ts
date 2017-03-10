import {GreetingService}from './greeting.service';
import {TestBed, inject} from '@angular/core/testing';
describe('Test Plain Greeting Service', () => {
    let greetingService;
    beforeEach(() => {
        greetingService = new GreetingService();
    });

    it('should have generated the greeting service', () => {
        expect(greetingService).toBeTruthy()
    });
    it('should return Hi, Peter', () => {
        let msg = greetingService.greet('Peter');
        expect(msg).toEqual('Hi, Peter');
    });
});

describe('Test Greeting service via TestBed', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [GreetingService]
        });

        // service = TestBed.get(GreetingService);
    });

    // ALternative notation, use separate injector instead of TestBed.get()
    beforeEach(inject([GreetingService], (svc: GreetingService) => {
        service = svc;
    }));

    it('Should have generated the service via TestBed', () => {
        expect(service).toBeTruthy();
    });

    it('Should return Hi, Sandra', () => {
        expect(service.greet('Sandra')).toEqual('Hi, Sandra');
    });

});