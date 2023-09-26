import _ from 'lodash';

function getConstantHeaders(additions = []) {
  return [
    { key: 'order_ID', title: 'orderId' },
    { key: 'name', title: 'name' },
    { key: 'total_refunded', title: 'totalRefunded' },
    { key: 'created_at', title: 'createdAt' },
    { key: 'total_price', title: 'totalPrice' },
    { key: 'country', title: 'country' },
    { key: 'total_production_cost', title: 'totalProductionCost' },
    { key: 'clients_shipping_price', title: 'clientsShippingPrice' },
    { key: 'financial_status', title: 'financialStatus' },
    { key: 'total_discounts', title: 'totalDiscounts' },
    { key: 'total_tax', title: 'totalTax' },
    { key: 'subtotal_price', title: 'subtotalPrice' },
    { key: 'total_items', title: 'totalItems' },
    { key: 'fulfillment_status', title: 'fulfillmentStatus' },
    { key: 'currency', title: 'currency' },
    { key: 'cancel_reason', title: 'cancelReason' },
    { key: 'cancelled_at', title: 'cancelledAt' },
    { key: 'total_shipping_labels_cost', title: 'totalShippingLabelsCost' },
    { key: 'email', title: 'email' },
    { key: 'first_name', title: 'firstName' },
    { key: 'last_name', title: 'lastName' },
    { key: 'total_order_shipping_cost', title: 'totalOrderShippingCost' },
    { key: 'total_order_handling_cost', title: 'totalOrderHandlingCost' },
    { key: 'shipping_source', title: 'shippingSource' },
    { key: 'shipping_title', title: 'shippingTitle' },
    { key: 'shipping_tax', title: 'shippingTax' },
    { key: 'total_fees', title: 'totalFees' },
    { key: 'shipping_labels_exist', title: 'shippingLabelsExist' },
    { key: 'gross_profit', title: 'grossProfit' },
    { key: 'gross_margin', title: 'grossMargin' },
    ...additions
  ];
}

function getConstantDefaultForm(order = {}) {
  return {
    order_ID: 0,
    name: '',
    total_refunded: 0,
    created_at: '',
    total_price: 0,
    country: '',
    total_production_cost: 0,
    clients_shipping_price: 0,
    financial_status: '',
    total_discounts: 0,
    total_tax: 0,
    subtotal_price: 0,
    total_items: 0,
    fulfillment_status: '',
    currency: '',
    cancel_reason: '',
    cancelled_at: '',
    total_shipping_labels_cost: 0,
    email: '',
    first_name: '',
    last_name: '',
    total_order_shipping_cost: 0,
    total_order_handling_cost: 0,
    shipping_source: '',
    shipping_title: '',
    shipping_tax: 0,
    total_fees: 0,
    shipping_labels_exist: '',
    gross_profit: 0,
    gross_margin: 0,
    ...order
  };
}
export { getConstantHeaders, getConstantDefaultForm };
