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
    <section id="pricing-plans" class="py-5">
        <div class="container-fluid my_card-header p-5 my-5">
            <h1 class="my_font-serif my_title fw-bold text-center">Pricing Plans</h1>
            <p class="text-center pb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem temporibus eum voluptas exercitationem.
            </p>

            <div class="card-group pt-5">
                <div class="my_card card rounded rounded-0" style="width: 18rem;">
                    <h2 class="my_card-title my_card-header my_font-serif fw-bold card-title px-4">Save up to 40&#37; by
                        paying weekly
                    </h2>
                    <ul v-for="key in Object.keys(plansList[0]).splice(3, 10)" class="list-group list-group-flush">
                        <li class="list-group-item py-4 fw-bold px-4 py-3">{{ key }}</li>
                    </ul>
                </div>

                <div v-for="plan, index in plansList" class="my_card card rounded rounded-0"
                    :class="(planActiveIndex === index) ? 'my_active' : ''" style="width: 18rem;" :key="index">
                    <div class="my_card-body card-body">
                        <div class="my_img-container  my_card-header text-center py-4">
                            <img class="card-img-top"
                                :src="store.getImgPath(plansIconsImgPath + plan.imgPath + plansIconsImgExtension)"
                                alt="Card image cap">
                        </div>
                        <h3 class="my_font-serif card-title fw-bold text-center">{{ plan.Type }}</h3>
                        <h4 class="my_price text-center fw-bold">{{ '&#36;' + plan.Price }}</h4>
                    </div>
                    <ul class="list-group list-group-flush text-center">
                        <li class="list-group-item py-4">{{ plan['Number of Courses'] }}</li>
                        <li class="list-group-item py-4">{{ plan.Time }}</li>
                        <li class="my_icon-container list-group-item py-4" :class="(plan['Web Designing']) ? 'my_checked' :
                        ''">{{ (plan['Web Designing']) ? '&#10003;' :
    '&#10007' }}</li>
                        <li class="my_icon-container list-group-item py-4" :class="(plan['Human-Centered Design']) ? 'my_checked' :
                        ''">{{ (plan['Human-Centered Design']) ? '&#10003;' :
    '&#10007' }}</li>
                        <li class="my_icon-container list-group-item py-4" :class="(plan['Basic Marketing']) ? 'my_checked' :
                        ''">{{ (plan['Basic Marketing']) ? '&#10003;' :
    '&#10007' }}</li>
                        <li class="my_icon-container list-group-item py-4" :class="(plan['Python for Everybody']) ? 'my_checked' :
                        ''">{{ (plan['Python for Everybody']) ? '&#10003;' :
    '&#10007' }}</li>
                        <li class="my_icon-container list-group-item py-4" :class="(plan['Android Developer']) ? 'my_checked' :
                        ''">{{ (plan['Android Developer']) ? '&#10003;' :
    '&#10007' }}</li>
                        <li class="my_icon-container list-group-item py-4" :class="(plan['Business English']) ? 'my_checked' :
                        ''">{{ (plan['Business English']) ? '&#10003;' :
    '&#10007' }}</li>
                    </ul>
                    <div class="my_card-body card-body text-center d-flex align-items-center justify-content-center ">
                        <a href="#"
                            class="my_btn card-link btn btn-primary text-uppercase rounded rounded-0 fw-bold px-5 py-3">Get
                            it now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

#pricing-plans {
    background-image: url('../../assets/img/background-pattern.jpg');
    border-bottom: 2px solid $border-color-6;

    .my_title {
        font-size: 4rem;
    }

    ul li {
        color: $text-color-15;
        border-color: $border-color-6;
        font-size: 1.5rem;

    }

    .my_card {

        .container-fluid,
        .my_card-body:not(.my_card-body:last-of-type) {
            border-top: 10px solid $border-color-3;
        }


        img {
            width: 100px;
        }

        .my_price {
            color: $text-color-18;
        }

        p {
            color: $text-color-16;
        }

        ul li.my_icon-container {
            font-size: 2rem;

            &.my_checked {
                color: $text-color-9;
            }
        }

        .my_card-body {
            background-color: $bg-color-6;
        }

        .my_btn {
            color: $text-color-16;
            background-color: $bg-color-8;
            border: 2px solid $border-color-6;
        }

        .my_card-title {
            padding-top: 10rem;
            padding-bottom: 2rem;
        }

        &.my_active {

            .my_card-body:not(.my_card-body:last-of-type) {
                border-top: 10px solid $border-color-7;
            }

            .my_btn {
                background-color: $bg-color-11;
                border-color: transparent;
                color: $text-color-1;
            }
        }
    }
}
</style>