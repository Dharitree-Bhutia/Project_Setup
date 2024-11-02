const Coupon = require("../model/coupon")

exports.createCoupon = async (req, res) => {
    try {
        const data = req.body
        const newCoupon = new Coupon(data);
        const response = await newCoupon.save();
        console.log("data saved");
        res.status(200).json(response)

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
exports.getCoupon = async (req, res) => {
    try {
        const data = await Coupon.find();
        console.log('data Featch');
        res.status(200).json(data)

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

exports.updateCoupon = async (req, res) => {
    try {
        const couponId = req.params.id;
        const updateCoupon = req.body;

        const response = await Coupon.findByIdAndUpdate(couponId, updateCoupon, {
            new: true,
            runValidators: true
        })
        if (!response) {
            return res.status(404).json({ error: 'Coupon not found' });
        }
        console.log('data updated');
        res.status(200).json(response)

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
exports.deleteCoupon = async (req, res) => {
    try {
        const couponId = req.params.id;
        const response = await Coupon.findByIdAndDelete(couponId)

        if (!response) {
            return res.status(404).json({ error: "Coupon not found" })
        }

        console.log("data deleted");
        res.status(200).json({ massege: 'Data successefully deleted' })

    } catch (err) {
        console.log(err);

        res.status(500).json({ error: "Internal Server error" })
    }
}