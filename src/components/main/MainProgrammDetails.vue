<script>
import { store } from '../../store';

export default {
    name: 'MainProgrammDetails',

    data() {
        return {
            store,
            activeProgrammInfoIndex: 0,
            imgsPath: 'h12-tabs-icon-',
            imgsExtension: '.png',

            programmInfoList: [
                'What We Do',
                'Degree Programme',
                'Career Archievements',
                'Personal Managment',
                'Steps To Success',
                'Knowledge Transfer',
            ],

            programmDetailsList: [
                {
                    title: 'Learning Possibilities',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum corrupti dolores non vero sed Incidunt sapiente officiis quas optio in excepturi soluta nesciunt maxime illum sed et ab, esse omnis rerum sequi fugit necessitatibus odit atque nihil corporis non dolor. Consequatur alias dolore sit ea maiores, est ad fugit nostrum.',
                    list: [
                        'We enrich lives through learning.',
                        'Maximizing potenzial through individual attenzion.',
                        'The trusted name for specialized training.',
                        'People teach. People learn. This is where they connect.'
                    ]
                },


                {
                    title: 'Learning Possibilities',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum corrupti dolores non vero sed Incidunt sapiente officiis quas optio in excepturi soluta nesciunt maxime illum sed et ab, esse omnis rerum sequi fugit necessitatibus odit atque nihil corporis non dolor. Consequatur alias dolore sit ea maiores, est ad fugit nostrum.',
                    list: [
                        'We enrich lives through learning.',
                        'Maximizing potenzial through individual attenzion.',
                        'The trusted name for specialized training.',
                        'People teach. People learn. This is where they connect.'
                    ]
                },

                {
                    title: 'Learning Possibilities',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum corrupti dolores non vero sed Incidunt sapiente officiis quas optio in excepturi soluta nesciunt maxime illum sed et ab, esse omnis rerum sequi fugit necessitatibus odit atque nihil corporis non dolor. Consequatur alias dolore sit ea maiores, est ad fugit nostrum.',
                    list: [
                        'We enrich lives through learning.',
                        'Maximizing potenzial through individual attenzion.',
                        'The trusted name for specialized training.',
                        'People teach. People learn. This is where they connect.'
                    ]
                },

                {
                    title: 'Learning Possibilities',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum corrupti dolores non vero sed Incidunt sapiente officiis quas optio in excepturi soluta nesciunt maxime illum sed et ab, esse omnis rerum sequi fugit necessitatibus odit atque nihil corporis non dolor. Consequatur alias dolore sit ea maiores, est ad fugit nostrum.',
                    list: [
                        'We enrich lives through learning.',
                        'Maximizing potenzial through individual attenzion.',
                        'The trusted name for specialized training.',
                        'People teach. People learn. This is where they connect.'
                    ]
                },

                {
                    title: 'Learning Possibilities',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum corrupti dolores non vero sed Incidunt sapiente officiis quas optio in excepturi soluta nesciunt maxime illum sed et ab, esse omnis rerum sequi fugit necessitatibus odit atque nihil corporis non dolor. Consequatur alias dolore sit ea maiores, est ad fugit nostrum.',
                    list: [
                        'We enrich lives through learning.',
                        'Maximizing potenzial through individual attenzion.',
                        'The trusted name for specialized training.',
                        'People teach. People learn. This is where they connect.'
                    ]
                },

                {
                    title: 'Learning Possibilities',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum corrupti dolores non vero sed Incidunt sapiente officiis quas optio in excepturi soluta nesciunt maxime illum sed et ab, esse omnis rerum sequi fugit necessitatibus odit atque nihil corporis non dolor. Consequatur alias dolore sit ea maiores, est ad fugit nostrum.',
                    list: [
                        'We enrich lives through learning.',
                        'Maximizing potenzial through individual attenzion.',
                        'The trusted name for specialized training.',
                        'People teach. People learn. This is where they connect.'
                    ]
                },
            ]
        }
    }
}
</script>

<template>
    <section id="programm-details">
        <div class="container-fluid">
            <div class="row">
                <div class="col-4">
                    <ul class="list-unstyled">
                        <li v-for="programmInfo, index in programmInfoList" :key="index" class="my_font-serif fw-bold"
                            :class="(activeProgrammInfoIndex === index) ? 'my_active' : ''">{{ programmInfo }}</li>
                    </ul>

                    <div class="my_img-container">

                    </div>
                </div>

                <div class="col-8">
                    <h1 class="my_font-serif fw-bold">{{ programmDetailsList[activeProgrammInfoIndex].title }}</h1>

                    <p>{{ programmDetailsList[activeProgrammInfoIndex].text }}</p>

                    <div class="row">
                        <div class="col-8">
                            <ul>
                                <li v-for="elementList in programmDetailsList[activeProgrammInfoIndex].list">{{
                                    elementList
                                }}
                                </li>
                            </ul>
                        </div>

                        <div class="col-2">
                            <div class="my_img-container">
                                <img :src="store.getImgPath(imgsPath + (activeProgrammInfoIndex + 1) + imgsExtension)"
                                    alt="" class="w-100">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="" scoped>
    
</style>