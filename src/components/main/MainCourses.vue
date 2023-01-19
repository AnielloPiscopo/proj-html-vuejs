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
                    price: 'free',
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
                    price: '20',
                    type: 'Business'
                },
            ],
        }
    }
}
</script>

<template>
    <section id="online-courses">
        <div class="container-fluid">
            <h1 class="my_font-serif">Popular Online Course</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente repudiandae quia perferendis vero
                quos. Ex sed earum quas doloremque alias.
            </p>

            <div class="card-group">
                <div v-for="course, index in coursesList" class="card" style="width: 18rem;" :key="index">
                    <img class="card-img-top" :src="store.getImgPath(`course-${course.number}-f-img.jpg`)"
                        alt="Card image cap">
                    <div class="card-body">
                        <h5 class="my_font-serif card-title">{{ course.title }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{{ course.teacher }}</h6>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil rem asperiores inventore iste
                            impedit id aut vel incidunt.
                        </p>

                        <div>
                            <h6 class="text-uppercase">{{ course.type }}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">

</style>