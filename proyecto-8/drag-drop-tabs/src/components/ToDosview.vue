<script setup>
import { reactive } from "vue";
import InputNew from "./InputNew.vue";

let boards = reactive([
  {
    id: crypto.randomUUID(),
    name: "board 1",
    items: [
      {
        id: crypto.randomUUID(),
        title: "Feature de archivos",
      },
      {
        id: crypto.randomUUID(),
        title: "Resolver bug",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "board 2",
    items: [
      {
        id: crypto.randomUUID(),
        title: "Mandar reporte",
      },
      {
        id: crypto.randomUUID(),
        title: "Code review",
      },
    ],
  },
]);

function handleNewItem(text, board) {
  board.items.push({
    id: crypto.randomUUID(),
    title: text.value,
  });
}

function handleNewBoard() {
  const name = prompt("Name of the Board");
  if (!!name) {
    boards.push({
      id: crypto.randomUUID(),
      name: name,
      items: [],
    });
  }
}

function startDrag(e, board, item) {
  e.dataTransfer.setData(
    "text/plain",
    JSON.stringify({ boardId: board.id, itemId: item.id })
  );
}

function onDrop(e, destino) {
  const { boardId, itemId } = JSON.parse(e.dataTransfer.getData("text/plain")),
    originBoard = boards.find((item) => item.id === boardId),
    originItem = originBoard.items.find((item) => item.id === itemId);

  destino.items.push({ ...originItem });
  originBoard.items = originBoard.items.filter((item) => item !== originItem);
}
</script>

<template>
  <div class="bg-gray-100 w-full h-screen flex justify-center items-center">
    <div>
      <nav class="mb-2.5">
        <ul class="p-0 list-none">
          <li>
            <a
              href="#"
              @click.prevent="handleNewBoard"
              class="font-bold text-xl text-green-500 bg-gray-900 rounded px-2 py-1"
              >Create board</a
            >
          </li>
        </ul>
      </nav>

      <section class="">
        <article class="flex gap-2.5">
          <div
            class="p-2.5 bg-gray-300 rounded"
            @drop="onDrop($event, board)"
            @dragover.prevent
            @dragenter.prevent
            v-for="board in boards"
            :key="board.id"
          >
            <div>{{ board.name }}</div>

            <InputNew @on-new-item="(text) => handleNewItem(text, board)" />
            <div class="flex flex-col gap-1">
              <div
                class="p-2.5 bg-white rounded"
                draggable="true"
                @dragstart="startDrag($event, board, item)"
                v-for="item in board.items"
                :key="item.id"
              >
                {{ item.title }}
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  </div>
</template>

<style scoped>
/* nav {
  margin-bottom: 10px;
}

nav ul {
  list-style: none;
  padding: 0;
}

.nav-link {
  font-size: 18px;
  font-weight: bold;
}
.boards {
  display: flex;
  gap: 10px;
}

.board {
  background-color: var(--vt-c-white-board);
  padding: 10px;
  border-radius: 5px;
}

.items {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.item {
  background-color: var(--vt-c-white);
  padding: 10px;
  border-radius: 5px;
}

.item:nth-child(1) {
  margin-top: 5px;
} */
</style>
