import { create } from 'zustand';

const horo = [
   {
     id: 1,
     signe: "Bélier",
     date: "21 mars au 19 avril",
     amour: "Ce mois-ci, l'amour sera au rendez-vous pour les Béliers. Votre charme naturel sera irrésistible, attirant de nouvelles personnes dans votre vie. Pour les couples, la communication sera la clé pour renforcer les liens existants. Vous ressentirez un désir intense et une profonde connexion émotionnelle. Prenez le temps de raviver la flamme et de créer des souvenirs inoubliables avec votre partenaire.",
     travail: "Dans le domaine professionnel, les astres prédisent une période de croissance et d'accomplissement pour les Béliers. Votre détermination et votre créativité seront vos atouts principaux. Soyez prêt à saisir de nouvelles opportunités et à relever des défis ambitieux. Votre leadership sera reconnu, ce qui pourrait ouvrir des portes vers l'avancement ou de nouveaux projets passionnants. Restez concentré sur vos objectifs et travaillez avec acharnement pour atteindre vos ambitions professionnelles.",
     argent: "En ce qui concerne vos finances, ce mois-ci s'annonce plutôt stable et propice à la gestion prudente de votre argent. Vous aurez l'opportunité de consolider vos finances et de mettre en place des stratégies d'économie judicieuses. Évitez les dépenses impulsives et concentrez-vous sur la planification financière à long terme. Les investissements réfléchis pourraient porter leurs fruits. Restez vigilant et évitez les prises de risques inutiles pour maintenir une situation financière solide.",
     sante: "Ce mois-ci, accordez une attention particulière à votre bien-être physique et mental. Pratiquez régulièrement une activité physique pour maintenir votre énergie et votre vitalité. N'oubliez pas de prendre des moments de relaxation pour gérer le stress. Une alimentation équilibrée et un sommeil suffisant sont essentiels pour maintenir une bonne santé.",
     famille: "Votre famille et vos amis seront une source de soutien et de réconfort ce mois-ci. Passez du temps de qualité avec vos proches pour renforcer les liens affectifs. Écoutez leurs préoccupations et partagez les vôtres. La communication ouverte sera la clé pour maintenir des relations harmonieuses.",
     conseil: "Ce mois-ci, rappelez-vous que la patience est une vertu. Ne vous précipitez pas dans vos décisions, que ce soit dans votre carrière, vos finances ou vos relations. Prenez le temps de réfléchir et d'évaluer toutes les options avant de prendre des décisions importantes. La réflexion approfondie vous aidera à éviter les erreurs potentielles et à atteindre vos objectifs de manière plus efficace.",
     image: "./img/belier.png"
   },
   {
     id: 2,
     signe: "Cancer",
     date: "21 juin au 22 juillet",
     amour: "Les Cancers vivront des moments passionnés et excitants ce mois-ci. Leur charme naturel sera irrésistible, attirant de nouvelles personnes dans leur vie. Pour les couples, la communication sera la clé pour renforcer les liens existants. Ils ressentiront un désir intense et une profonde connexion émotionnelle. Ils devraient prendre le temps de raviver la flamme et de créer des souvenirs inoubliables avec leur partenaire.",
     travail: "Dans le domaine professionnel, les astres prédisent une période de croissance et d'accomplissement pour les Cancers. Leur détermination et leur créativité seront leurs atouts principaux. Ils devraient être prêts à saisir de nouvelles opportunités et à relever des défis ambitieux. Leur leadership sera reconnu, ce qui pourrait ouvrir des portes vers l'avancement ou de nouveaux projets passionnants. Ils doivent rester concentrés sur leurs objectifs et travailler avec acharnement pour atteindre leurs ambitions professionnelles.",
     argent: "En ce qui concerne leurs finances, ce mois-ci s'annonce plutôt stable et propice à la gestion prudente de leur argent. Ils auront l'opportunité de consolider leurs finances et de mettre en place des stratégies d'économie judicieuses. Ils devraient éviter les dépenses impulsives et se concentrer sur la planification financière à long terme. Les investissements réfléchis pourraient porter leurs fruits. Ils doivent rester vigilants et éviter les prises de risques inutiles pour maintenir une situation financière solide.",
     sante: "Ce mois-ci, les Cancers devraient accorder une attention particulière à leur bien-être physique et mental. Ils devraient pratiquer régulièrement une activité physique pour maintenir leur énergie et leur vitalité. N'oubliant pas de prendre des moments de relaxation pour gérer le stress. Une alimentation équilibrée et un sommeil suffisant sont essentiels pour maintenir une bonne santé.",
     famille: "La famille et les amis des Cancers seront une source de soutien et de réconfort ce mois-ci. Les Cancers devraient passer du temps de qualité avec leurs proches pour renforcer les liens affectifs. Ils devraient écouter leurs préoccupations et partager les leurs. La communication ouverte sera la clé pour maintenir des relations harmonieuses.",
     conseil: "Ce mois-ci, les Cancers devraient se rappeler que la patience est une vertu. Ils ne devraient pas se précipiter dans leurs décisions, que ce soit dans leur carrière, leurs finances ou leurs relations. Ils devraient prendre le temps de réfléchir et d'évaluer toutes les options avant de prendre des décisions importantes. La réflexion approfondie les aidera à éviter les erreurs potentielles et à atteindre leurs objectifs de manière plus efficace.",
     image: "./img/cancer.png"
   },
   {
     id: 3,
     signe: "Capricorne",
     date: "21 décembre au 20 janvier",
     amour: "Les Capricornes vivront des moments passionnés et excitants ce mois-ci. Leur charme naturel sera irrésistible, attirant de nouvelles personnes dans leur vie. Pour les couples, la communication sera la clé pour renforcer les liens existants. Ils ressentiront un désir intense et une profonde connexion émotionnelle. Ils devraient prendre le temps de raviver la flamme et de créer des souvenirs inoubliables avec leur partenaire.",
     travail: "Dans le domaine professionnel, les astres prédisent une période de croissance et d'accomplissement pour les Capricornes. Leur détermination et leur créativité seront leurs atouts principaux. Ils devraient être prêts à saisir de nouvelles opportunités et à relever des défis ambitieux. Leur leadership sera reconnu, ce qui pourrait ouvrir des portes vers l'avancement ou de nouveaux projets passionnants. Ils doivent rester concentrés sur leurs objectifs et travailler avec acharnement pour atteindre leurs ambitions professionnelles.",
     argent: "En ce qui concerne leurs finances, ce mois-ci s'annonce plutôt stable et propice à la gestion prudente de leur argent. Ils auront l'opportunité de consolider leurs finances et de mettre en place des stratégies d'économie judicieuses. Ils devraient éviter les dépenses impulsives et se concentrer sur la planification financière à long terme. Les investissements réfléchis pourraient porter leurs fruits. Ils doivent rester vigilants et éviter les prises de risques inutiles pour maintenir une situation financière solide.",
     sante: "Ce mois-ci, les Capricornes devraient accorder une attention particulière à leur bien-être physique et mental. Ils devraient pratiquer régulièrement une activité physique pour maintenir leur énergie et leur vitalité. N'oubliant pas de prendre des moments de relaxation pour gérer le stress. Une alimentation équilibrée et un sommeil suffisant sont essentiels pour maintenir une bonne santé.",
     famille: "La famille et les amis des Capricornes seront une source de soutien et de réconfort ce mois-ci. Les Capricornes devraient passer du temps de qualité avec leurs proches pour renforcer les liens affectifs. Ils devraient écouter leurs préoccupations et partager les leurs. La communication ouverte sera la clé pour maintenir des relations harmonieuses.",
     conseil: "Ce mois-ci, les Capricornes devraient se rappeler que la patience est une vertu. Ils ne devraient pas se précipiter dans leurs décisions, que ce soit dans leur carrière, leurs finances ou leurs relations. Ils devraient prendre le temps de réfléchir et d'évaluer toutes les options avant de prendre des décisions importantes. La réflexion approfondie les aidera à éviter les erreurs potentielles et à atteindre leurs objectifs de manière plus efficace.",
     image: "./img/capricorne.png"
   },
   {
     id: 4,
     signe: "Gémeaux",
     date: "21 mai au 20 juin",
     amour: "Ce mois-ci, les Gémeaux vivront des moments d'amour passionnés et excitants. Leur charme naturel sera irrésistible, attirant de nouvelles personnes dans leur vie. Pour les couples, la communication sera la clé pour renforcer les liens existants. Ils ressentiront un désir intense et une profonde connexion émotionnelle. Ils devraient prendre le temps de raviver la flamme et de créer des souvenirs inoubliables avec leur partenaire.",
     travail: "Dans le domaine professionnel, les astres prédisent une période de croissance et d'accomplissement pour les Gémeaux. Leur détermination et leur créativité seront leurs atouts principaux. Ils devraient être prêts à saisir de nouvelles opportunités et à relever des défis ambitieux. Leur leadership sera reconnu, ce qui pourrait ouvrir des portes vers l'avancement ou de nouveaux projets passionnants. Ils doivent rester concentrés sur leurs objectifs et travailler avec acharnement pour atteindre leurs ambitions professionnelles.",
     argent: "En ce qui concerne leurs finances, ce mois-ci s'annonce plutôt stable et propice à la gestion prudente de leur argent. Ils auront l'opportunité de consolider leurs finances et de mettre en place des stratégies d'économie judicieuses. Ils devraient éviter les dépenses impulsives et se concentrer sur la planification financière à long terme. Les investissements réfléchis pourraient porter leurs fruits. Ils doivent rester vigilants et éviter les prises de risques inutiles pour maintenir une situation financière solide.",
     sante: "Ce mois-ci, les Gémeaux devraient accorder une attention particulière à leur bien-être physique et mental. Ils devraient pratiquer régulièrement une activité physique pour maintenir leur énergie et leur vitalité. N'oubliant pas de prendre des moments de relaxation pour gérer le stress. Une alimentation équilibrée et un sommeil suffisant sont essentiels pour maintenir une bonne santé.",
     famille: "La famille et les amis des Gémeaux seront une source de soutien et de réconfort ce mois-ci. Les Gémeaux devraient passer du temps de qualité avec leurs proches pour renforcer les liens affectifs. Ils devraient écouter leurs préoccupations et partager les leurs. La communication ouverte sera la clé pour maintenir des relations harmonieuses.",
     conseil: "Ce mois-ci, les Gémeaux devraient se rappeler que la patience est une vertu. Ils ne devraient pas se précipiter dans leurs décisions, que ce soit dans leur carrière, leurs finances ou leurs relations. Ils devraient prendre le temps de réfléchir et d'évaluer toutes les options avant de prendre des décisions importantes. La réflexion approfondie les aidera à éviter les erreurs potentielles et à atteindre leurs objectifs de manière plus efficace.",
     image: "./img/cancer.png"
   },
   {
     id: 5,
     signe: "Lion",
     date: "23 juillet au 22 août",
     amour: "Les Lions vivront des moments d'amour passionnés et excitants ce mois-ci. Leur charme naturel sera irrésistible, attirant de nouvelles personnes dans leur vie. Pour les couples, la communication sera la clé pour renforcer les liens existants. Ils ressentiront un désir intense et une profonde connexion émotionnelle. Ils devraient prendre le temps de raviver la flamme et de créer des souvenirs inoubliables avec leur partenaire.",
     travail: "Dans le domaine professionnel, les astres prédisent une période de croissance et d'accomplissement pour les Lions. Leur détermination et leur créativité seront leurs atouts principaux. Ils devraient être prêts à saisir de nouvelles opportunités et à relever des défis ambitieux. Leur leadership sera reconnu, ce qui pourrait ouvrir des portes vers l'avancement ou de nouveaux projets passionnants. Ils doivent rester concentrés sur leurs objectifs et travailler avec acharnement pour atteindre leurs ambitions professionnelles.",
     argent: "En ce qui concerne leurs finances, ce mois-ci s'annonce plutôt stable et propice à la gestion prudente de leur argent. Ils auront l'opportunité de consolider leurs finances et de mettre en place des stratégies d'économie judicieuses. Ils devraient éviter les dépenses impulsives et se concentrer sur la planification financière à long terme. Les investissements réfléchis pourraient porter leurs fruits. Ils doivent rester vigilants et éviter les prises de risques inutiles pour maintenir une situation financière solide.",
     sante: "Ce mois-ci, les Lions devraient accorder une attention particulière à leur bien-être physique et mental. Ils devraient pratiquer régulièrement une activité physique pour maintenir leur énergie et leur vitalité. N'oubliant pas de prendre des moments de relaxation pour gérer le stress. Une alimentation équilibrée et un sommeil suffisant sont essentiels pour maintenir une bonne santé.",
     famille: "La famille et les amis des Lions seront une source de soutien et de réconfort ce mois-ci. Les Lions devraient passer du temps de qualité avec leurs proches pour renforcer les liens affectifs. Ils devraient écouter leurs préoccupations et partager les leurs. La communication ouverte sera la clé pour maintenir des relations harmonieuses.",
     conseil: "Ce mois-ci, les Lions devraient se rappeler que la patience est une vertu. Ils ne devraient pas se précipiter dans leurs décisions, que ce soit dans leur carrière, leurs finances ou leurs relations. Ils devraient prendre le temps de réfléchir et d'évaluer toutes les options avant de prendre des décisions importantes. La réflexion approfondie les aidera à éviter les erreurs potentielles et à atteindre leurs objectifs de manière plus efficace.",
     image: "./img/capricorne.png"
   }
 ]
 
// use + nom du store
const useHoroscopeStore = create((set, get) => ({
   horoscope: horo,
   currentIndex: 0,
   next: () => set((state) => ({
      // Vérifier si on dépasse pas la borne supérieure, si oui : currentIndex = 0
      currentIndex: state.currentIndex >= state.horoscope.length - 1 ? 0 : state.currentIndex + 1
   })),
   previous: () => set((state) => ({
      // Vérifier si on dépasse pas la borne inférieure, si oui : currentIndex = 0
      currentIndex: state.currentIndex <= 0 ? state.horoscope.length - 1 : state.currentIndex - 1
   })),
   getPreviousIndex: () => {
      return get().currentIndex <= 0 ? get().horoscope.length - 1 : get().currentIndex - 1;
   },
   getNextIndex: () => {
      return get().currentIndex >= get().horoscope.length - 1 ? 0 : get().currentIndex + 1;
   }
}))

export default useHoroscopeStore
