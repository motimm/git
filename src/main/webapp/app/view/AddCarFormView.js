Ext.define('CarCatalog.view.AddCarFormView', {
    extend: 'Ext.window.Window',
    alias: 'widget.addCarFormView',
    autoShow: true,
    layout: 'fit',
    modal: true,
    items: [
        {
            bodyPadding: 10,
            xtype: 'form',
            items: [
                {
                    xtype: 'textfield',
                    name: 'name',
                    fieldLabel: 'Samochod',
                    allowBlank: false,
                    blankText: 'Nie moze byc puste'
                },
                {
                    xtype: 'textfield',
                    name: 'price',
                    fieldLabel: 'Cena',
                    regex: /^([0-9]{1,20})*$/,
                    regexText: 'Musza byc cyfry',
                    allowBlank: false,
                    blankText: 'Nie moze byc puste'
                }
            ]
        }
    ],

    buttons: [
        {
            text: 'Zapis',
            action: 'save',
            disabled: true
        },
        {
            text: 'Anuluj',
            handler: function () {
                this.up('window').close();
            }

        }
    ]
});