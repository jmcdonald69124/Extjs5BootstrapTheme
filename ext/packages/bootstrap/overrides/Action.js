
Ext.define('overrides.Action', {
    override    : 'Ext.grid.column.Action',

    initComponent: function() {
        var me = this;
        //console.log('init called');
        me.callParent();
        if (me.sortable && !me.dataIndex) {
            me.sortable = false;
        }
    },
    defaultRenderer: function(v, cellValues, record, rowIdx, colIdx, store, view) {

        var me = this,
            prefix = Ext.baseCSSPrefix,
            scope = me.origScope || me,
            items = me.items,
            len = items.length,
            i = 0,
            item, ret, disabled, tooltip;

        // Allow a configured renderer to create initial value (And set the other values in the "metadata" argument!)
        // Assign a new variable here, since if we modify "v" it will also modify the arguments collection, meaning
        // we will pass an incorrect value to getClass/getTip
        ret = Ext.isFunction(me.origRenderer) ? me.origRenderer.apply(scope, arguments) || '' : '';

        cellValues.tdCls += ' ' + Ext.baseCSSPrefix + 'action-col-cell';
        for (; i < len; i++) {
            item = items[i];
            //console.log(item);
            disabled = item.disabled || (item.isDisabled ? item.isDisabled.call(item.scope || scope, view, rowIdx, colIdx, item, record) : false);
            tooltip = disabled ? null : (item.tooltip || (item.getTip ? item.getTip.apply(item.scope || scope, arguments) : null));

            // Only process the item action setup once.
            if (!item.hasActionConfiguration) {

                // Apply our documented default to all items
                item.stopSelection = me.stopSelection;
                item.disable = Ext.Function.bind(me.disableAction, me, [i], 0);
                item.enable = Ext.Function.bind(me.enableAction, me, [i], 0);
                item.hasActionConfiguration = true;
            }

            //console.log('actionIconCls = ' + me.actionIconCls + '  ' + prefix + 'action-col-' + String(i));

            if(!item.glyphCls){
                ret += '<img role="button" alt="' + (item.altText || me.altText) + '" src="' + (item.icon || Ext.BLANK_IMAGE_URL) +
                    '" class="' + me.actionIconCls + ' ' + prefix + 'action-col-' + String(i) + ' ' + (disabled ? prefix + 'item-disabled' : ' ') +
                    (Ext.isFunction(item.getClass) ? item.getClass.apply(item.scope || scope, arguments) : (item.iconCls || me.iconCls || '')) + '"' +
                    (tooltip ? ' data-qtip="' + tooltip + '"' : '') + ' />';
            } else {
                ret += '<span role="button" style="width:16px; cursor:pointer;color:#777; margin-right:3px;margin-left:3px;height:16px;font-size: 14px !important;"'
                + 'class=" ' + me.actionIconCls + ' ' + prefix + 'action-col-' + String(i) + ' ' + (disabled ? prefix + 'item-disabled' : ' ')
                + ' glyphicon ' + (Ext.isFunction(item.getClass) ? item.getClass.apply(item.scope || scope, arguments)  : ( item.glyphCls || me.glyphCls ||  '')) + '"' +
                    (tooltip ? ' data-qtip="' + tooltip + '"' : '') + '"  > </span> &nbsp;';
            }
        }
        return ret;
    }
});