Ext.define('CarCatalog.view.CarGridView', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.carGridView',
    width: 400,
    height: 300,
    frame: true,
    store: 'CarCatalogStore',
    iconCls: 'icon-user',
    viewConfig:{
        markDirty:false
    },
    columns: [
        {
            text: 'Model',
            flex: 1,
            sortable: true,
            dataIndex: 'name',
            editor: {
                xtype:'textfield',
                allowBlank: false,
                blankText: 'Nie moze byc puste'
            }
        },
        {
            flex: 2,
            text: 'Cena',
            sortable: true,
            dataIndex: 'price',
            editor: {
                xtype:'textfield',
                regex: /^([0-9]{1,10})*$/,
                regexText: 'Musze zawierac cyfry',
                allowBlank: false,
                blankText: 'Nie moze byc puste'
            }
        }
    ],
    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 2,
            saveBtnText: 'Zapis',
            cancelBtnText: 'Anuluj'
        })
    ],
    selType: 'rowmodel',
    dockedItems: [
        {
            xtype: 'toolbar',
            items: [
                {
                    text: 'Dodaj',
                    action: 'add',
                    iconCls: 'icon-add'
                },
                '-',
                {
                    action: 'delete',
                    text: 'Usun',
                    iconCls: 'icon-delete',
                    disabled: true
                }
            ]
        }
    ]
});