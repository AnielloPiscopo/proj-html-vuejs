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
    <section id="programm-details" class="py-5">
        <div class="container-fluid p-5 my-5">
            <div class="row justify-content-between">
                <div class="col-3">
                    <ul class="my_programm-list list-unstyled">
                        <li v-for="programmInfo, index in programmInfoList" :key="index"
                            class="my_font-serif fw-bold py-4"
                            :class="(activeProgrammInfoIndex === index) ? 'my_active' : ''">

                            <span class="px-4">
                                {{ programmInfo }}
                            </span>
                        </li>
                    </ul>

                    <div class="my_img-container">

                    </div>
                </div>

                <div class="col-8">
                    <h1 class="my_font-serif my_title fw-bold">{{ programmDetailsList[activeProgrammInfoIndex].title }}
                    </h1>

                    <p class="py-3">{{ programmDetailsList[activeProgrammInfoIndex].text }}</p>

                    <div class="row">
                        <div class="col-8">
                            <ul class="my_programm-details-list list-unstyled">
                                <li v-for="elementList in programmDetailsList[activeProgrammInfoIndex].list"
                                    class="pt-4">{{
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

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

#programm-details {
    border-bottom: 2px solid $border-color-6;

    p,
    ul.my_programm-details-list li {
        color: $text-color-15;
    }

    ul.my_programm-list li {
        color: $text-color-7;
        border-bottom: 2px solid $border-color-6;
        border-left: 2px solid $border-color-6;
        border-right: 2px solid $border-color-6;


        &:first-of-type {
            border-top: 2px solid $border-color-6;
        }

        &.my_active {
            color: $text-color-6;
            border-left: 10px solid $text-color-6;
            background-color: $bg-color-7;
        }
    }

    ul.my_programm-details-list li::before {
        content: '\2713';
        color: $text-color-6;
        padding-right: 0.7remet;
    }

    .my_title {
        font-size: 3.5rem;
    }
}
</style>