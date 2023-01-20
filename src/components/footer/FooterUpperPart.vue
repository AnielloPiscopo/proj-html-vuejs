<script>
import { store } from '../../store';

export default {
    name: 'FooterUpperPart',

    data() {
        return {
            store,
            phoneContactResource: '1-677-124-44227',
            popularCoursesTeachersList: [
                {
                    course: 'Business English',
                    name: 'Preston Marshall',
                },

                {
                    course: 'Social Computing',
                    name: 'David Sanders',
                },

                {
                    course: 'Learn Spanish',
                    name: 'Jennie King',
                },
            ],
            supportLinksList: [
                'User dashboard',
                'Contact',
                'FAQ',
                'Course Offer',
                'Events',
            ],
        }
    }
}
</script>

<template>
    <div class="my_container container-fluid py-5">
        <div class="row justify-content-between">
            <div class="col-9">
                <div class="row">
                    <div class="col-4">
                        <div class="my_logo-container pb-2">
                            <img :src="store.getImgPath('footer-logo-1.png')" alt="" class="w-50">
                        </div>

                        <p class="w-75 py-4">
                            Providing Life Changing Experiences Through Education. Class That Fit Your Busy Life. Closer
                            to Home
                        </p>

                        <ul class="list-unstyled">
                            <li class="my_icon-container pb-4">
                                <span>
                                    <font-awesome-icon icon="fa-solid fa-phone" />
                                </span>
                                <span class="ps-3">{{ phoneContactResource }}</span>
                            </li>
                            <li class="my_icon-container pb-4">
                                <span>
                                    <font-awesome-icon icon="fa-regular fa-clock" />
                                </span>
                                <span class="ps-3">Mon-Sat 8.00-18.00</span>
                            </li>
                        </ul>
                    </div>

                    <div class="col-4">
                        <h2 class="my_font-serif my_title pb-2">Popular Courses</h2>

                        <ul class="my_popular-courses list-unstyled"
                            v-for="popularCoursesTeacher in popularCoursesTeachersList">
                            <li class="py-2">
                                <h4 class="my_font-serif my_subtitle m-0">{{ popularCoursesTeacher.course }}</h4>
                                <span>{{ popularCoursesTeacher.name }}</span>
                            </li>
                        </ul>
                    </div>

                    <div class="col-4">
                        <h2 class="my_font-serif my_title pb-2">Support</h2>
                        <ul class="list-unstyled">
                            <li v-for="supportLink in supportLinksList" class="py-2">
                                <a href="#" class="text-decoration-none">{{ supportLink }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="col-3">
                <h2 class="my_font-serif my_title text-end">Flexible Learning</h2>
                <div class="my_img-container text-end">
                    <img :src="store.getImgPath('footer-img-1.png')" alt="" class="w-75">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

.my_container {
    color: $text-color-11;

    .my_title {
        color: $text-color-1;
    }

    a {
        color: $text-color-11;
    }

    .my_subtitle,
    .my_icon-container {
        color: $text-color-5;
    }

    span,
    ul li {
        font-size: 1rem;
    }
}
</style>