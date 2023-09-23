export interface ChargeBeeWebhookDto {
    id: string;
    occurred_at: number;
    source: string;
    object: string;
    api_version: string;
    content: ChargeBeeContent;
    event_type: string;
    webhook_status: string;
    webhooks: Webhook[];
}

export interface ChargeBeeContent {
    invoice?: Invoice;
    subscription?: ChargeBeeSubscription;
    customer?: Customer;
    card?: Card;
    transaction?: Transaction;
}

export interface Card {
    status: string;
    gateway: string;
    gateway_account_id: string;
    iin: string;
    last4: string;
    card_type: string;
    funding_type: string;
    expiry_month: number;
    expiry_year: number;
    created_at: number;
    updated_at: number;
    ip_address: string;
    resource_version: number;
    object: string;
    masked_number: string;
    customer_id: string;
    payment_source_id: string;
}

export interface Customer {
    id: string;
    first_name: string;
    email: string;
    phone: string;
    auto_collection: string;
    net_term_days: number;
    allow_direct_debit: boolean;
    created_at: number;
    taxability: string;
    updated_at: number;
    locale: string;
    pii_cleared: string;
    channel: string;
    resource_version: number;
    deleted: boolean;
    object: string;
    billing_address: IngAddress;
    card_status: string;
    promotional_credits: number;
    refundable_credits: number;
    excess_payments: number;
    unbilled_charges: number;
    preferred_currency_code: string;
    primary_payment_source_id: string;
    payment_method: PaymentMethod;
    tax_providers_fields: any[];
    auto_close_invoices: boolean;
}

export interface IngAddress {
    first_name: FirstName;
    last_name: LastName;
    line1: Line1;
    city: City;
    state_code: StateCode;
    state: State;
    country: Country;
    zip: string;
    validation_status: ValidationStatus;
    object: unknown;
}

export enum City {
    SouthWestDelhi = 'South West Delhi',
}

export enum Country {
    In = 'IN',
}

export enum FirstName {
    Rohan = 'Rohan',
}

export enum LastName {
    Rajpal = 'Rajpal',
}

export enum Line1 {
    A175SFKhNo1521FreedomFighterEnclaveNebSarai = 'A-1/75 SF, Kh No 152/1, Freedom Fighter, Enclave, Neb Sarai',
}

export enum Object {
    BillingAddress = 'billing_address',
    ShippingAddress = 'shipping_address',
}

export enum State {
    Delhi = 'Delhi',
}

export enum StateCode {
    DL = 'DL',
}

export enum ValidationStatus {
    NotValidated = 'not_validated',
}

export interface PaymentMethod {
    object: string;
    type: string;
    reference_id: string;
    gateway: string;
    gateway_account_id: string;
    status: string;
}

export interface Invoice {
    id: string;
    customer_id: string;
    subscription_id: string;
    recurring: boolean;
    status: string;
    price_type: string;
    date: number;
    due_date: number;
    net_term_days: number;
    exchange_rate: number;
    total: number;
    amount_paid: number;
    amount_adjusted: number;
    write_off_amount: number;
    credits_applied: number;
    amount_due: number;
    paid_at: number;
    updated_at: number;
    resource_version: number;
    deleted: boolean;
    object: string;
    first_invoice: boolean;
    amount_to_collect: number;
    round_off_amount: number;
    new_sales_amount: number;
    has_advance_charges: boolean;
    currency_code: string;
    base_currency_code: string;
    generated_at: number;
    is_gifted: boolean;
    term_finalized: boolean;
    channel: string;
    tax: number;
    line_items: LineItem[];
    sub_total: number;
    linked_payments: LinkedPayment[];
    applied_credits: any[];
    adjustment_credit_notes: any[];
    issued_credit_notes: any[];
    linked_orders: any[];
    dunning_attempts: any[];
    billing_address: IngAddress;
    shipping_address: IngAddress;
}

export interface LineItem {
    id: string;
    date_from: number;
    date_to: number;
    unit_amount: number;
    quantity: number;
    amount: number;
    pricing_model: string;
    is_taxed: boolean;
    tax_amount: number;
    object: string;
    subscription_id: string;
    customer_id: string;
    description: string;
    entity_type: string;
    entity_id: string;
    metered: boolean;
    tax_exempt_reason: string;
    discount_amount: number;
    item_level_discount_amount: number;
}

export interface LinkedPayment {
    txn_id: string;
    applied_amount: number;
    applied_at: number;
    txn_status: string;
    txn_date: number;
    txn_amount: number;
}

export interface ChargeBeeSubscription {
    id: string;
    billing_period: number;
    billing_period_unit: string;
    customer_id: string;
    status: string;
    current_term_start: number;
    current_term_end: number;
    next_billing_at: number;
    created_at: number;
    started_at: number;
    activated_at: number;
    created_from_ip: string;
    updated_at: number;
    has_scheduled_changes: boolean;
    payment_source_id: string;
    channel: string;
    resource_version: number;
    deleted: boolean;
    object: string;
    currency_code: string;
    subscription_items: SubscriptionItem[];
    shipping_address: IngAddress;
    due_invoices_count: number;
    mrr: number;
    has_scheduled_advance_invoices: boolean;
    create_pending_invoices: boolean;
    auto_close_invoices: boolean;
}

export interface SubscriptionItem {
    item_price_id: string;
    item_type: string;
    quantity: number;
    unit_price: number;
    amount: number;
    free_quantity: number;
    object: string;
}

export interface Transaction {
    id: string;
    customer_id: string;
    subscription_id: string;
    gateway_account_id: string;
    payment_source_id: string;
    payment_method: string;
    gateway: string;
    type: string;
    date: number;
    exchange_rate: number;
    amount: number;
    id_at_gateway: string;
    status: string;
    updated_at: number;
    resource_version: number;
    deleted: boolean;
    object: string;
    masked_card_number: string;
    currency_code: string;
    base_currency_code: string;
    amount_unused: number;
    linked_invoices: LinkedInvoice[];
    linked_refunds: any[];
    initiator_type: string;
    three_d_secure: boolean;
    payment_method_details: string;
}

export interface LinkedInvoice {
    invoice_id: string;
    applied_amount: number;
    applied_at: number;
    invoice_date: number;
    invoice_total: number;
    invoice_status: string;
}

export interface Webhook {
    id: string;
    webhook_status: string;
    object: string;
}
