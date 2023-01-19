<script>
import { store } from '../../store';

export default {
    name: 'MainPricingPlans',

    data() {
        return {
            store,
            plansIconsImgPath: 'h5-custom-icon-',
            plansIconsImgExtension: '.png',
            planActiveIndex: 1,

            plansList: [
                {
                    imgPath: '7',
                    Type: 'Standard',
                    Price: 12,
                    'Number of Courses': 2,
                    Time: '15 Days',
                    'Web Designing': true,
                    'Human-Centered Design': true,
                    'Basic Marketing': false,
                    'Python for Everybody': false,
                    'Android Developer': false,
                    'Business English': false,
                },


                {
                    imgPath: '8',
                    Type: 'Professional',
                    Price: 59,
                    'Number of Courses': 4,
                    Time: '30 Days',
                    'Web Designing': true,
                    'Human-Centered Design': true,
                    'Basic Marketing': true,
                    'Python for Everybody': true,
                    'Android Developer': false,
                    'Business English': false,
                },


                {
                    imgPath: '9',
                    Type: 'Advanced',
                    Price: 88,
                    'Number of Courses': 6,
                    Time: '30 Days',
                    'Web Designing': true,
                    'Human-Centered Design': true,
                    'Basic Marketing': true,
                    'Python for Everybody': true,
                    'Android Developer': true,
                    'Business English': true,
                },
            ],
        }
    },
}
</script>

<template>
    <section id="pricing-plans">
        <div class="container-fluid">
            <h1 class="my_font-serif">Pricing Plans</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem temporibus eum voluptas exercitationem.
            </p>

            <div class="card-group">
                <div class="card" style="width: 18rem;">
                    <h4 class="card-title">Save up to 40&#37; by paying weekly</h4>
                    <ul v-for="key in Object.keys(plansList[0]).splice(3, 10)" class="list-group list-group-flush">
                        <li class="list-group-item">{{ key }}</li>
                    </ul>
                </div>

                <div v-for="plan, index in plansList" class="card"
                    :class="(planActiveIndex === index) ? 'my_active' : ''" style="width: 18rem;" :key="index">
                    <div class="container-fluid">
                        <img class="card-img-top"
                            :src="store.getImgPath(plansIconsImgPath + plan.imgPath + plansIconsImgExtension)"
                            alt="Card image cap">
                        <h4 class="card-title">{{ '&#36;' + plan.Price }}</h4>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">{{ plan['Number of Courses'] }}</li>
                        <li class="list-group-item">{{ plan.Time }}</li>
                        <li class="list-group-item">{{ (plan['Web Designing']) ? '&#10003;' : '&#10007' }}</li>
                        <li class="list-group-item">{{ (plan['Human-Centered Design']) ? '&#10003;' : '&#10007' }}</li>
                        <li class="list-group-item">{{ (plan['Basic Marketing']) ? '&#10003;' : '&#10007' }}</li>
                        <li class="list-group-item">{{ (plan['Python for Everybody']) ? '&#10003;' : '&#10007' }}</li>
                        <li class="list-group-item">{{ (plan['Android Developer']) ? '&#10003;' : '&#10007' }}</li>
                        <li class="list-group-item">{{ (plan['Business English']) ? '&#10003;' : '&#10007' }}</li>
                    </ul>
                    <div class="card-body">
                        <a href="#" class="card-link btn btn-primary text-uppercase rounded rounded-0">Get it now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

</style>