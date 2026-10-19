---
slug: /datagrid/exporting-printing
sidebar_label: Exporting & Printing
---

# Exporting & Printing

## Foobar

Lorem ipsum `dolor sit amet`, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
invidunt ut labore et `dolore magna` aliquyam erat, sed diam voluptua.

```typescript
import {
  CdkDatagridFormManager,
  GlobalRules,
  MatDatagridDirective,
  DatagridValidation,
} from '@rescoped/datagrid';

import { TableVirtualScrollDataSource } from 'ng-table-virtual-scroll';

@Component({
  selector: 'page-datagrid',
  templateUrl: './page-datagrid.component.html',
  styleUrls: ['./page-datagrid.component.scss'],
})
export class PageDatagridComponent implements OnInit {
  readonly tableColumns = ['foo', 'bar', 'baz'];

  dataSource = new TableVirtualScrollDataSource<Device>([]);

  initDevicesRendering() {
    this.devices$.pipe(take(1)).subscribe(devices => (this.dataSource.data = devices));
  }

  ngOnInit() {
    this.initDevicesRendering();
  }
}
```
