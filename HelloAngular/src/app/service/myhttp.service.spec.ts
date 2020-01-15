import { MyhttpService, DataForm } from './myhttp.service';
import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
// //--------------------------
// describe('MyhttpService by createSpyObj', () => {
//   let httpClientSpy: { get: jasmine.Spy };
//   let myhttpServ: MyhttpService;
//   beforeEach(() => {
//     httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
//     myhttpServ = new MyhttpService(<any>httpClientSpy);
//   });
//   it('should retur expected {id:1:name:"clover"}', () => {
//     const expectedData: DataForm[] = [{ id: 1, name: 'clover' }];
//     httpClientSpy.get.and.returnValue(of(expectedData));
//     myhttpServ.getUsers().subscribe(res => {
//       expect(res[0].id).toBe(1);
//       expect(res[0].name).toBe('clover');
//       expect(res).toEqual(expectedData);
//     });
//   });
// });
describe('MyhttpService by SpyOn', () => {
  let myhttpServ: MyhttpService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [MyhttpService]
    }).compileComponents();
  });
  beforeEach(() => {
    myhttpServ = TestBed.get(MyhttpService);
    spyOn(myhttpServ, 'getUsers').and.returnValue(
      of([{ id: 1, name: 'clover' }])//Observable
    );
  });
  it('should be created', () => {
    const service: MyhttpService = TestBed.get(MyhttpService);
    expect(service).toBeTruthy();
  });
  it('should get id:1 name:clover', () => {
    myhttpServ.getUsers().subscribe(res => {
      expect(res[0].id).toBe(1);
      expect(res[0].name).toBe('clover');
    });
  });
});
