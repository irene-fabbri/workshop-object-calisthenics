const shippingRates = {
    'premiumUser': 4.99,
    'basicUser': {
        'heavy': 15.99,
        'coupon': 2.99,
        'standard': 8.99
    }
};

const freeShippingCap = 100;

function calculateShipping(cart, user) {

    if (cart.totalAmount > freeShippingCap ) return 0;
    if (user.isPremium) return shippingRates.premiumUser;
    if (cart.hasHeavyItems()) return shippingRates.basicUser.heavy;
    if (user.hasCoupons()) return shippingRates.basicUser.coupon;
    return shippingRates.basicUser.standard;
}