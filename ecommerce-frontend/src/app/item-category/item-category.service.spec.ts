import { TestBed } from '@angular/core/testing';

import { ItemCategoryService } from './item-category/item-category.service';

describe('ItemCategoryService', () => {
  let service: ItemCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
