import * as React from 'react';
import { TableDescription, ColumnDescriptor, GroupHeaderRow } from '../../../table/model';

export interface TableHeadGroupCellProps<D> {
    scope: 'row' | 'col';
    colStart: number;
    colSpan: number;
    id: string;
    row: GroupHeaderRow;
    column: ColumnDescriptor<D>;
    tableDescription: TableDescription<D>;
    style?: React.CSSProperties;
}

export class TableHeadGroupCell<D> extends React.Component<TableHeadGroupCellProps<D>, never> {
    render() {
        const { colStart, tableDescription, id, row, column, ...other } = this.props;
        return <th {...other} />;
    }
}
