import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Mic, MicOff, RefreshCw } from "lucide-react";
import AnimatedText from '../components/ui/AnimatedText';
import ScrollIndicator from '../components/ui/ScrollIndicator';
import ImageReveal from '../components/ui/ImageReveal';
import StoryModal from "../components/ui/StoryModal";
import ReadAloud from "../components/ui/ReadAloud";

interface Story {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  content: string;
}

const stories: Story[] = [
    {
        title: "The Friendship Tree",
        excerpt: "In the heart of Jaipur, a special tree stood tall in a park, where children gathered to share their dreams and secrets. When a shy new girl, Emily, arrived, the tree became her refuge. Through kindness and friendship, she found her place, learning valuable lessons about love, forgiveness, and the power of true companionship.",
        image: "https://pplx-res.cloudinary.com/image/upload/v1743350723/user_uploads/rPlLupbTxRvhekv/Screenshot-from-2025-03-30-19-56-22.jpg",
        category: "Friendship & Life Lessons",
        content: `In the heart of the city Jaipur, there was a park where children would play and laugh. Among the trees, there was one special tree, an old and gnarled oak that had been there for generations. This tree was known as the Friendship Tree, and it was a place where children would gather to share their secrets and dreams.

    One day, a new girl named Emily moved to the city. She was shy and lonely, and she didn't know anyone. She wandered through the park, looking for a place to belong. When she saw the Friendship Tree, she knew that she had found her home.

Emily sat under the tree and watched the other children play. There was Maya, always sketching in her notebook, dreaming of being an artist. Liam, energetic and competitive, was practicing his football skills. And Aisha, kind and gentle, was reading a book of poetry. They were a diverse group, each with their own unique talents and personalities. Emily longed to join them, but fear held her back.

One day, Emily was sitting under the tree when Maya, noticing her quiet presence, approached her. "Hi," Maya said, a warm smile gracing her face. "I'm Maya. Do you like to draw?"

Emily, surprised and delighted, nodded shyly. Soon, she was sharing her own drawings with Maya, discovering a shared passion. Through Maya, Emily met Liam and Aisha. They played games, told stories, and laughed together. Emily felt like she had finally found a place to belong.

As the years went by, Emily and her friends grew closer. They shared their joys and sorrows, their triumphs and failures. The Friendship Tree was their witness, its rustling leaves seeming to whisper encouragement.

One day, Liam started acting differently. He became boastful and unkind, putting down the others to make himself feel better. He started cheating at games and making fun of Aisha's quiet nature. The group was torn. They loved Liam, but they couldn't condone his behavior.

Emily, remembering her own initial shyness and how kindness had drawn her in, decided to talk to Liam. She reminded him of the values they had shared under the Friendship Tree – kindness, respect, and fairness. Liam, initially defensive, eventually listened. He realized he was hurting his friends and apologized. It wasn't easy, and he had to work hard to change, but with the support of his friends, he did.

Another time, Aisha's family faced a difficult situation. They were struggling financially, and Aisha had to give up her dream of going to a special art camp. Emily, remembering how Maya had first approached her, organized a small fundraiser within their group. They sold their drawings, performed small plays, and collected donations. Their efforts, though small, helped Aisha attend the camp. Seeing Aisha's joy filled Emily with a sense of fulfillment. She understood that true happiness came not from what you received, but from what you gave.

As the years passed, the friends grew up. They went to different schools and pursued different dreams. But they never forgot the lessons they learned under the Friendship Tree. They learned the importance of kindness, the power of forgiveness, and the strength of true friendship. And they learned that what you put out into the world, whether good or bad, eventually comes back to you. The Friendship Tree stood tall, a silent testament to their bond, its branches reaching towards the sky like outstretched arms, ready to embrace new generations of friends.`
    },
    {
        title: "The Melody of Giving",
        excerpt: "In a lively village by a shimmering river, young Rohan dreamed of playing the flute, but his family couldn't afford one. Despite setbacks, he found music in the world around him. When he helped Mrs. Chatterjee in her beautiful garden, he discovered that kindness and generosity create melodies more beautiful than any instrument ever could.",
        image: "https://pplx-res.cloudinary.com/image/upload/v1743350722/user_uploads/SZnFLFjqLEoCFPd/Screenshot-from-2025-03-30-19-58-00.jpg",
        category: "Kindness & Dreams",
        content: `In a vibrant village nestled beside a shimmering river, lived a young boy named Rohan. Rohan loved music. He would often sit by the riverbank, listening to the gentle murmur of the water and composing melodies in his head. He dreamed of playing the flute, but his family couldn't afford one.... Across the river lived an old woman named Mrs. Chatterjee. She was known for her beautiful garden, overflowing with colorful flowers and fragrant herbs. Rohan would often admire her garden from afar, wishing he could wander through its fragrant paths.

    One day, a traveling musician came to the village. He played the flute with such passion and skill that Rohan was mesmerized. After the performance, Rohan approached the musician, his eyes shining with admiration. He confessed his dream of learning to play.

    The musician smiled kindly. "Music lives within you, young man," he said. "But a flute is a tool. You must find your own way to make music until you have one."

    Inspired, Rohan began experimenting. He tried making flutes from reeds and bamboo, but none produced the sweet melody he longed for. He even tried whistling tunes, but it wasn't the same. He felt a pang of discouragement. Maybe I'm just not meant to be a musician, he thought. Maybe it's just a silly dream.

    One day, while walking by Mrs. Chatterjee's garden, he noticed she was struggling to carry a heavy watering can. Without hesitation, Rohan rushed to help her. He carried the can, watered the plants, and even helped her weed some flowerbeds. As he worked, he listened. The gurgling of the water as it filled the can, the rhythmic snip of the shears as he trimmed the overgrown herbs, the buzzing of the bees flitting from flower to flower – all these sounds began to weave themselves into a new melody in his mind.

    Mrs. Chatterjee was grateful. "Thank you, Rohan," she said. "You're a kind and helpful boy."

    Rohan blushed. "It was nothing, Mrs. Chatterjee," he replied. But as he helped her, he noticed the rhythmic sound of the water flowing into the can, the gentle rustle of the leaves, and the buzzing of the bees. He realized that music was all around him, even in the simplest of things. He began to truly listen.

    He started listening more closely to the sounds of the village – the chirping of the birds, the clanging of the blacksmith's hammer, the laughter of children playing. He began to create rhythms and melodies from these everyday sounds. He tapped on pots and pans, hummed along with the wind, and even used two sticks to create percussive beats. He discovered the music in the rhythm of his own footsteps, the creaking of the old wooden bridge, and the splashing of the river against the rocks. He felt a renewed sense of hope. Maybe he could make music, even without a flute.

    One afternoon, Mrs. Chatterjee was sitting in her garden, listening to the birds sing. Rohan, inspired by the birdsong, began tapping out a rhythm on a nearby wooden bench. The rhythm was complex and beautiful, reflecting the sounds of the garden.

    Mrs. Chatterjee listened intently. "That's beautiful, Rohan," he said. "It sounds like the music of the garden itself."

    Rohan smiled. He had found his own way to make music, not with a flute, but with the world around him.

    A few weeks later, a traveling merchant came to the village. He had a small, beautifully crafted flute for sale. Rohan, remembering the musician's words, didn't feel the same longing as before. He had discovered the music within himself and the world around him.

    Mrs. Chatterjee, however, had noticed Rohan's passion for music and his kindness towards her. She purchased the flute from the merchant and presented it to Rohan.

    "This is for you, Rohan," she said. "Your kindness and your love for music have touched my heart."... Rohan was overwhelmed with gratitude. He took the flute and began to play, the melody flowing from his heart, inspired by the sounds of the river, the birds, the garden, and the kindness of an old woman. He realized that his willingness to help others, his act of giving, had brought him his heart's desire. He learned that sometimes, the most beautiful melodies are born not from what we receive, but from what we give. And in giving, we often receive more than we could ever imagine.`
    },
    {
        title: "The Weaver's Secret",
        excerpt: "In a village nestled among rolling hills, young Tara dreamed of weaving, inspired by her grandmother’s intricate tapestries. When a storm devastated her home, she discovered that weaving wasn’t just about creating beauty—it was about preserving stories and connecting lives. Through acts of kindness, she caught the attention of the reclusive Master Elara, who revealed that the true magic of weaving lay in empathy, storytelling, and the threads that bind us all.",
        image: "https://pplx-res.cloudinary.com/image/upload/v1743350723/user_uploads/VoSJxlALiUtVsXR/Screenshot-from-2025-03-30-19-57-22.jpg",
        category: "Wisdom & Creativity",
        content: `In a small village nestled amidst rolling hills, lived a young girl named Tara. Tara was fascinated by the art of weaving. She would watch her grandmother, a master weaver, create intricate tapestries filled with vibrant colors and captivating patterns. Tara dreamed of weaving her own stories, but her family needed her to help in the fields, leaving little time for her passion.

Across the village lived a renowned but reclusive weaver, Master Elara. Rumors swirled around her – some said she possessed magical looms, others whispered she knew the secrets of weaving dreams. Tara longed to learn from her, but Master Elara rarely accepted apprentices.

One day, a devastating storm swept through the village, destroying many homes and damaging the crops. Tara, along with her family and other villagers, worked tirelessly to rebuild. She helped repair roofs, carried supplies, and comforted those who had lost everything. She noticed an old woman, her hands trembling, struggling to salvage what was left of her small loom. Tara, remembering her grandmother's teachings, gently helped the woman repair the loom, showing her how to mend the broken threads.

As Tara worked, she noticed the intricate patterns the old woman had been weaving – patterns that depicted the history of the village, its joys and sorrows. She realized that weaving was more than just creating beautiful cloth; it was a way of preserving stories, of keeping memories alive.

One evening, exhausted but filled with a sense of purpose, Tara was walking home when she saw Master Elara standing near her garden. Elara's garden, usually vibrant, was now ravaged by the storm. Without a word, Tara began helping her clear the debris and replant the damaged flowers.

Master Elara watched her silently. As Tara worked, she hummed a little tune, a melody inspired by the rhythm of her hands as she worked, the gentle rustling of the leaves, and the quiet strength of the villagers.

When they had finished, Master Elara turned to Tara. "You have a kind heart, child," she said. "And I hear music in your hands."

Tara was surprised. She had never thought of her work as music.

"Tell me," Master Elara continued, "why do you help others?"

Tara thought for a moment. "Because it feels right," she replied. "Because we are all connected, like threads in a tapestry. When one of us suffers, we all suffer."

Master Elara smiled. "You understand the true meaning of weaving, Tara," she said. "It is not just about creating beautiful things, but about connecting with others, about sharing stories, about healing."

Master Elara then invited Tara to her workshop. It wasn't filled with magical looms, but with looms of all shapes and sizes, each one holding the stories of those who had woven on it. Elara began teaching Tara, not just the technical skills of weaving, but also the importance of patience, the power of observation, and the magic of storytelling.

Tara learned that every thread, every color, every pattern had a meaning. She learned to weave her own stories, stories of courage, resilience, and hope. She wove stories of the storm and the villagers' strength, stories of kindness and compassion, stories of the interconnectedness of all things.

Years later, Tara became a renowned weaver herself. Her tapestries were not just beautiful; they were filled with meaning, with the stories of her village, with the echoes of the storm, and with the lessons she had learned from Master Elara. She realized that her willingness to help others, her acts of kindness, had not only helped her community but had also unlocked her own creative potential. She learned that true artistry comes not just from talent, but from empathy, from connection, and from a heart that is willing to give. And in giving, she discovered the true magic of weaving – the power to connect, to heal, and to inspire.`
  }
];

const StoryPage = () => {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openStory = (story: Story) => {
    setSelectedStory(story);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center pt-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="container mx-auto max-w-5xl"
        >
          <div className="text-center mb-8">
            <motion.div 
              className="inline-block px-3 py-1 mb-6 rounded-full bg-rose-100 text-rose-600 text-xs font-semibold tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              INTERACTIVE READING
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight leading-tight">
              <AnimatedText 
                text="Read Aloud & Learn Together" 
                once={true}
              />
            </h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Practice reading with instant feedback. Our stories help you improve pronunciation and confidence.
            </motion.p>
          </div>

          <motion.div 
            className="flex justify-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <ScrollIndicator />
          </motion.div>
        </motion.div>
      </section>

      {/* Story List Section */}
      <section className="bg-white py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Choose Your Story
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((story, index) => (
              <motion.div
                key={index}
                className="bg-rose-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ImageReveal src={story.image} alt={story.title} />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {story.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {story.excerpt}
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-rose-600 font-semibold">
                      {story.category}
                    </span>
                    <button
                      className="flex items-center gap-2 bg-rose-200 text-rose-700 py-2 px-4 rounded-full hover:bg-rose-300 transition-colors duration-300"
                      onClick={() => openStory(story)}
                    >
                      <BookOpen size={16} />
                      Read Story
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Modal */}
      {selectedStory && (
        <StoryModal
          story={selectedStory}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <ReadAloud storyText={selectedStory.content} />
        </StoryModal>
      )}
    </div>
  );
};

export default StoryPage;