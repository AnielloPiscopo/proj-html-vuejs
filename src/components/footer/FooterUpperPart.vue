<script>
export default {
    name: 'FooterUpperPart',

    data() {
        return {
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
    <div class="container-fluid my-4">
        <div class="row justify-content-between">
            <div class="col-10">
                <div class="row">
                    <div class="col-4">
                        <div class="my_logo-container">
                            <img src="../../assets/img/logo-light.png" alt="" class="w-50">
                        </div>

                        <p>
                            Providing Life Changing Experiences Through Education. Class That Fit Your Busy Life. Closer
                            to Home
                        </p>

                        <ul class="list-unstyled">
                            <li>
                                <span>iii</span>
                                <span>{{ phoneContactResource }}</span>
                            </li>
                            <li>
                                <span>iii</span>
                                <span>Mon-Sat 8.00-18.00</span>
                            </li>
                        </ul>
                    </div>

                    <div class="col-3 offset-1">
                        <h3 class="my_font-serif">Popular Courses</h3>

                        <div class="my_popular-courses" v-for="popularCoursesTeacher in popularCoursesTeachersList">
                            <h5 class="my_font-serif m-0">{{ popularCoursesTeacher.course }}</h5>
                            <span>{{ popularCoursesTeacher.name }}</span>
                        </div>
                    </div>

                    <div class="col-4">
                        <h3 class="my_font-serif">Support</h3>
                        <ul class="list-unstyled">
                            <li v-for="supportLink in supportLinksList">
                                <a href="#" class="text-decoration-none">{{ supportLink }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="col-2">
                <h3 class="my_font-serif">Flexible Learning</h3>
                <div class="my_img-container">
                    <img src="../../assets/img/footer-img-1.png" alt="" class="w-100">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>