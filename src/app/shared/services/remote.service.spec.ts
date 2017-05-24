/*
import {TestBed, async, inject} from '@angular/core/testing';
import {HttpModule, XHRBackend, Response, ResponseOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {RemoteService} from "./remote.service";
import 'rxjs/add/operator/map';
describe('Simple HTTP Remote Service', () => {
    let remoteService, mockBackend;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports  : [HttpModule],
            providers: [
                RemoteService,
                MockBackend,
                {provide: XHRBackend, useClass: MockBackend}
            ]
        });
        remoteService = TestBed.get(RemoteService);
        mockBackend = TestBed.get(MockBackend);
    });

    it('RemoteService should be defined', () => {
        expect(remoteService).toBeDefined();
    });

    // it('MockBackend should be defined', () => {
    //     expect(mockBackend).toBeDefined();
    // });

    /!*it('Should return people.json', async(() => {
        // Create mock backend connection
        mockBackend.connections.subscribe((conn: MockConnection) => {
            conn.mockRespond(new Response(new ResponseOptions([{
                    name : 'Peter',
                    email: 'info@kassenaar.com'
                }, {
                    name : 'Sandra',
                    email: 'sandra@kassenaar.nl'
                }]))
            )
        });

        remoteService.getPeople().subscribe((result) => {
            expect(result).toBeDefined();
        });
    }))*!/
});*/
