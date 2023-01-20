<script>
import { store } from '../../store';

export default {
    name: 'MainCourses',

    data() {
        return {
            store,
            coursesList: [
                {
                    number: '5',
                    name: 'Android Developer',
                    teacher: 'David Sanders',
                    price: 'Free',
                    type: 'Programming'
                },

                {
                    number: '6',
                    name: 'Web Designing',
                    teacher: 'Jennifer Powell',
                    price: 'Free',
                    type: 'Programming'
                },

                {
                    number: '12',
                    name: 'Financial Modeling',
                    teacher: 'Edward Bowman',
                    price: '$20',
                    type: 'Business'
                },
            ],
        }
    }
}
</script>

<template>
    <section id="online-courses" class="py-5">
        <div class="container-fluid p-5 my-5">
            <h1 class="my_font-serif my_title fw-bold text-center">Popular Online Courses</h1>
            <p class="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente repudiandae quia perferendis vero
                quos. Ex sed earum quas doloremque alias.
            </p>

            <div class="card-group">
                <a href="#" v-for="course, index in coursesList" class="my_card card m-4 text-decoration-none"
                    style="width: 18rem;" :key="index">
                    <img class="card-img-top" :src="store.getImgPath(`course-${course.number}-f-img.jpg`)"
                        alt="Card image cap">
                    <div class="card-body my_card-body">
                        <div class="row justify-content-between">
                            <div class="col-7">
                                <h4 class="my_font-serif card-title fw-bold">{{ course.name }}</h4>
                                <h5 class="my_card-subtitle card-subtitle mb-2">{{ course.teacher }}</h5>
                            </div>
                            <div class="col-5 text-end">
                                <span class="my_price text-uppercase rounded rounded-pill"
                                    :class="(course.price === 'Free') ? 'my_special-offer' : ''">{{
                                        course.price
                                    }}</span>
                            </div>
                        </div>
                        <p class="card-text py-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil rem asperiores inventore iste
                            impedit id aut vel incidunt.
                        </p>

                        <ul class="d-flex align-items-center list-unstyled">
                            <li class="d-flex align-items-center">
                                <font-awesome-icon class="my_icon fs-6" icon="fa-solid fa-user" />
                                <h6 class="m-0 ps-2">1</h6>
                            </li>
                            <li class="d-flex align-items-center ps-3">
                                <font-awesome-icon class="my_icon" icon="fa-solid fa-tag" />
                                <h6 class="text-uppercase fw-bold m-0 ps-2">{{ course.type }}</h6>
                            </li>
                        </ul>
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

#online-courses {
    background-image: url('../../assets/img/background-pattern.jpg');
    border-bottom: 2px solid $border-color-6;

    a {
        color: $text-color-23;
    }

    .my_title {
        font-size: 4rem;
    }

    p {
        color: $text-color-16;
    }

    .my_card {
        border-color: $border-color-1;

        .my_card-body {
            padding-top: 2rem;
            padding-bottom: 2rem;
        }

        p {
            color: $text-color-15;
        }

        .my_price {
            color: $text-color-3;
            background-color: $bg-color-11;
            font-size: 2rem;
            padding: 0.2rem 1.5rem;

            &.my_special-offer {
                background-color: $bg-color-9;
                font-size: 1.2rem;
                padding: 0.1rem 1rem;
            }
        }

        .my_card-subtitle,
        ul li {
            color: $text-color-7;
        }
    }
}
</style>