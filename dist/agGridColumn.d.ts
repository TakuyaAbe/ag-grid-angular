import { QueryList } from "@angular/core";
import { ColDef, ColGroupDef, GetQuickFilterTextParams, IAggFunc, ICellRendererFunc, IsColumnFunc, RowNode } from "ag-grid/main";
export declare class AgGridColumn {
    childColumns: QueryList<AgGridColumn>;
    hasChildColumns(): boolean;
    toColDef(): ColDef;
    private getChildColDefs(childColumns);
    private createColDefFromGridColumn(from);
    headerName?: string;
    /** Whether to show the column when the group is open / closed. */
    columnGroupShow?: string;
    /** CSS class for the header */
    headerClass?: string | string[] | ((params: any) => string | string[]);
    /** CSS class for the header */
    toolPanelClass?: string | string[] | ((params: any) => string | string[]);
    /** Expression or function to get the cells value. */
    headerValueGetter?: string | Function;
    /** Set to true to not include this column in the toolpanel */
    suppressToolPanel?: boolean;
    /** Columns in this group */
    children: (ColDef | ColGroupDef)[];
    /** Group ID */
    groupId?: string;
    /** Open by Default */
    openByDefault?: boolean;
    /** If true, group cannot be broken up by column moving, child columns will always appear side by side, however you can rearrange child columns within the group */
    marryChildren?: boolean;
    /** The custom header group component to be used for rendering the component header. If none specified the default ag-Grid is used**/
    headerGroupComponent?: {
        new (): any;
    };
    /** The custom header group component to be used for rendering the component header in the hosting framework (ie: React/Angular). If none specified the default ag-Grid is used**/
    headerGroupComponentFramework?: {
        new (): any;
    };
    /** The custom header group component to be used for rendering the component header. If none specified the default ag-Grid is used**/
    headerGroupComponentParams?: any;
    /** The unique ID to give the column. This is optional. If missing, the ID will default to the field.
     *  If both field and colId are missing, a unique ID will be generated.
     *  This ID is used to identify the column in the API for sorting, filtering etc. */
    colId?: string;
    /** If sorting by default, set it here. Set to 'asc' or 'desc' */
    sort?: string;
    /** If sorting more than one column by default, the milliseconds when this column was sorted, so we know what order to sort the columns in. */
    sortedAt?: number;
    /** The sort order, provide an array with any of the following in any order ['asc','desc',null] */
    sortingOrder?: string[];
    /** The field of the row to get the cells data from */
    field?: string;
    /**
     * A comma separated string or array of strings containing ColumnType keys which can be used as a template for a column.
     * This helps to reduce duplication of properties when you have a lot of common column properties.
     */
    type?: string | string[];
    /** Set to true for this column to be hidden. Naturally you might think, it would make more sense to call this field 'visible' and mark it false to hide,
     *  however we want all default values to be false and we want columns to be visible by default. */
    hide?: boolean;
    /** Whether this column is pinned or not. */
    pinned?: boolean | string;
    /** The field where we get the tooltip on the object */
    tooltipField?: string;
    /** Tooltip for the column header */
    headerTooltip?: string;
    /** Expression or function to get the cells value. */
    valueGetter?: ((params: any) => any) | string;
    /** If not using a field, then this puts the value into the cell */
    valueSetter?: ((params: any) => boolean) | string;
    /** Function to return the key for a value - use this if the value is an object (not a primitive type) and you
     * want to a) group by this field or b) use set filter on this field. */
    keyCreator?: Function;
    /** Initial width, in pixels, of the cell */
    width?: number;
    /** Min width, in pixels, of the cell */
    minWidth?: number;
    /** Max width, in pixels, of the cell */
    maxWidth?: number;
    /** Class to use for the cell. Can be string, array of strings, or function. */
    cellClass?: string | string[] | ((cellClassParams: any) => string | string[]);
    /** An object of css values. Or a function returning an object of css values. */
    cellStyle?: {} | ((params: any) => {});
    /** A function for rendering a cell. */
    cellRenderer?: {
        new (): any;
    } | ICellRendererFunc | string;
    cellRendererFramework?: any;
    cellRendererParams?: any;
    /** Cell editor */
    cellEditor?: {
        new (): any;
    } | string;
    cellEditorFramework?: any;
    cellEditorParams?: any;
    /** A function for rendering a pinned row cell. */
    pinnedRowCellRenderer?: {
        new (): any;
    } | ICellRendererFunc | string;
    pinnedRowCellRendererFramework?: any;
    pinnedRowCellRendererParams?: any;
    /** A function to format a value, should return a string. Not used for CSV export or copy to clipboard, only for UI cell rendering. */
    valueFormatter?: (params: any) => string | string;
    /** A function to format a pinned row value, should return a string. Not used for CSV export or copy to clipboard, only for UI cell rendering. */
    pinnedRowValueFormatter?: (params: any) => string | string;
    /** Gets called after editing, converts the value in the cell. */
    valueParser?: (params: any) => any | string;
    /** Name of function to use for aggregation. One of [sum,min,max,first,last] or a function. */
    aggFunc?: string | IAggFunc;
    /** Agg funcs allowed on this column. If missing, all installed agg funcs are allowed.
     * Can be eg ['sum','avg']. This will restrict what the GUI allows to select only.*/
    allowedAggFuncs?: string[];
    /** To group by this column by default, either provide an index (eg rowGroupIndex=1), or set rowGroup=true. */
    rowGroupIndex?: number;
    rowGroup?: boolean;
    /** Set to true to have the grid place the values for the group into the cell, or put the name of a grouped column to just show that group. */
    showRowGroup?: string | boolean;
    /** To pivot by this column by default, either provide an index (eg pivotIndex=1), or set pivot=true. */
    pivotIndex?: number;
    pivot?: boolean;
    /** Comparator function for custom sorting. */
    comparator?: (valueA: any, valueB: any, nodeA?: RowNode, nodeB?: RowNode, isInverted?: boolean) => number;
    /** Comparator for values, used by renderer to know if values have changed. Cells who's values have not changed don't get refreshed. */
    equals?: (valueA: any, valueB: any) => boolean;
    /** Comparator for ordering the pivot columns */
    pivotComparator?: (valueA: string, valueB: string) => number;
    /** Set to true to render a selection checkbox in the column. */
    checkboxSelection?: boolean | ((params: any) => boolean);
    /** If true, a 'select all' checkbox will be put into the header */
    headerCheckboxSelection?: boolean | ((params: any) => boolean);
    /** If true, the header checkbox selection will work on filtered items*/
    headerCheckboxSelectionFilteredOnly?: boolean;
    /** Set to true if no menu should be shown for this column header. */
    suppressMenu?: boolean;
    /** The menu tabs to show, and in which order, the valid values for this property are:
     * filterMenuTab, generalMenuTab, columnsMenuTab **/
    menuTabs?: string[];
    /** Set to true if no sorting should be done for this column. */
    suppressSorting?: boolean;
    /** Set to true to not allow moving this column via dragging it's header */
    suppressMovable?: boolean;
    /** Set to true to not allow filter on this column */
    suppressFilter?: boolean;
    /** Set to true if you want the unsorted icon to be shown when no sort is applied to this column. */
    unSortIcon?: boolean;
    /** Set to true if you want this columns width to be fixed during 'size to fit' operation. */
    suppressSizeToFit?: boolean;
    /** Set to true if you do not want this column to be resizable by dragging it's edge. */
    suppressResize?: boolean;
    /** Set to true if you do not want this column to be auto-resizable by double clicking it's edge. */
    suppressAutoSize?: boolean;
    suppressKeyboardEvent?: (params: any) => boolean;
    /** If true, GUI will allow adding this columns as a row group */
    enableRowGroup?: boolean;
    /** If true, GUI will allow adding this columns as a pivot */
    enablePivot?: boolean;
    /** If true, GUI will allow adding this columns as a value */
    enableValue?: boolean;
    /** Set to true if this col is editable, otherwise false. Can also be a function to have different rows editable. */
    editable?: boolean | IsColumnFunc;
    colSpan?: (params: any) => number;
    /** Set to true if this col should not be allowed take new values from teh clipboard . */
    suppressPaste?: boolean | IsColumnFunc;
    /** Set to tru if this col should not be navigable with the tab key. Can also be a function to have different rows editable. */
    suppressNavigable?: boolean | IsColumnFunc;
    /** To create the quick filter text for this column, if toString is not good enough on the value. */
    getQuickFilterText?: (params: GetQuickFilterTextParams) => string;
    /** Callbacks for editing. See editing section for further details.
     * Return true if the update was successful, or false if not.
     * If false, then skips the UI refresh and no events are emitted.
     * Return false if the values are the same (ie no update). */
    newValueHandler?: (params: any) => boolean;
    /** If true, this cell gets refreshed when api.softRefreshView() gets called. */
    volatile?: boolean;
    /** Cell template to use for cell. Useful for AngularJS cells. */
    template?: string;
    /** one of the built in filter names: [set, number, text], or a filter function*/
    filter?: string | {
        new (): any;
    };
    filterFramework?: any;
    /** The filter params are specific to each filter! */
    filterParams?: any;
    /** Rules for applying css classes */
    cellClassRules?: {
        [cssClassName: string]: (Function | string);
    };
    /** Callbacks for editing.See editing section for further details. */
    onCellValueChanged?: Function;
    /** Function callback, gets called when a cell is clicked. */
    onCellClicked?: (event: any) => void;
    /** Function callback, gets called when a cell is double clicked. */
    onCellDoubleClicked?: (event: any) => void;
    /** Function callback, gets called when a cell is right clicked. */
    onCellContextMenu?: (event: any) => void;
    /** Icons for this column. Leave blank to use default. */
    icons?: {
        [key: string]: string;
    };
    /** If true, grid will flash cell after cell is refreshed */
    enableCellChangeFlash?: boolean;
    /** The custom header component to be used for rendering the component header. If none specified the default ag-Grid is used**/
    headerComponent?: {
        new (): any;
    };
    /** The custom header component to be used for rendering the component header in the hosting framework (ie: React/Angular). If none specified the default ag-Grid is used**/
    headerComponentFramework?: {
        new (): any;
    };
    /** The custom header component parameters**/
    headerComponentParams?: any;
    /** The custom header component to be used for rendering the floating filter. If none specified the default ag-Grid is used**/
    floatingFilterComponent?: {
        new (): any;
    };
    floatingFilterComponentParams?: any;
    floatingFilterComponentFramework?: {
        new (): any;
    };
    refData?: {
        [key: string]: string;
    };
}
